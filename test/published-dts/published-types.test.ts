/* eslint-disable sonarjs/os-command -- a local test running fixed commands (pnpm pack, tar, tsc) on controlled, internal paths */
import {execFileSync, execSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

// Type-checks the **published** declarations (built + packed) from an isolated
// consumer — the gap that `.spec-d.ts` (reads `src/`), `attw` and `publint` miss.
// Each file in `./scenarios` is a standalone consumer module that must compile
// cleanly against the published types; encode negative/precision checks inline
// with `@ts-expect-error` (a regression to `any`/`string` makes the directive
// unused, which is itself a `tsc` error and fails that scenario).
// Assumes `dist/` is already built (does NOT build); run after `nr build`.

const HERE = import.meta.dirname;
const ROOT = path.resolve(HERE, '../..');
const SCENARIOS_DIRECTORY = path.join(HERE, 'scenarios');
const TSC = path.join(ROOT, 'node_modules/.bin/tsc');
const ERROR_LINE_PATTERN = /^([^(]+\.ts)\(\d+,\d+\): error/;

const CONSUMER_TSCONFIG = {
  compilerOptions: {
    strict: true,
    module: 'nodenext',
    moduleResolution: 'nodenext',
    target: 'esnext',
    noEmit: true,
    // The assertions catch inference breakage on their own; we don't want to
    // fail on unrelated internal declarations of bundled deps.
    skipLibCheck: true,
  },
  include: ['**/*.ts'],
};

// Each subdirectory groups scenarios for one utility, e.g. `regexTyped/infer.ts`.
const scenarioFiles = fs
  .readdirSync(SCENARIOS_DIRECTORY, {recursive: true, encoding: 'utf8'})
  .filter((file) => file.endsWith('.ts'))
  .toSorted();

let consumerDirectory: string;
// Maps a scenario file name to the `tsc` error lines emitted for it.
const errorsByScenario = new Map<string, string[]>();
const unattributedErrors: string[] = [];

beforeAll(() => {
  if (!fs.existsSync(path.join(ROOT, 'dist/regex/index.d.mts'))) {
    throw new Error(
      'Built `dist/` not found. Run `nr build` before the published-DTS consumer check.',
    );
  }

  consumerDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'unutils-dts-consumer-'));
  const packed = execSync(`pnpm pack --pack-destination ${JSON.stringify(consumerDirectory)}`, {
    cwd: ROOT,
    encoding: 'utf8',
  })
    .trim()
    .split('\n')
    .at(-1)
    ?.trim();
  if (!packed) {
    throw new Error('`pnpm pack` produced no tarball path');
  }

  const tarballPath = path.isAbsolute(packed) ? packed : path.join(consumerDirectory, packed);
  const modulesDirectory = path.join(consumerDirectory, 'node_modules');
  fs.mkdirSync(modulesDirectory);
  execSync(`tar -xzf ${JSON.stringify(tarballPath)} -C node_modules`, {cwd: consumerDirectory});
  // npm/pnpm pack into a top-level `package/` directory.
  fs.renameSync(path.join(modulesDirectory, 'package'), path.join(modulesDirectory, 'unutils'));

  for (const file of scenarioFiles) {
    const destination = path.join(consumerDirectory, file);
    fs.mkdirSync(path.dirname(destination), {recursive: true});
    fs.copyFileSync(path.join(SCENARIOS_DIRECTORY, file), destination);
  }
  fs.writeFileSync(
    path.join(consumerDirectory, 'tsconfig.json'),
    JSON.stringify(CONSUMER_TSCONFIG, null, 2),
  );

  let output = '';
  try {
    execFileSync(TSC, ['--noEmit', '--pretty', 'false'], {
      cwd: consumerDirectory,
      encoding: 'utf8',
    });
  } catch (error) {
    output = (error as {stdout?: string}).stdout || '';
  }

  for (const line of output.split('\n').filter(Boolean)) {
    const file = ERROR_LINE_PATTERN.exec(line)?.[1];
    if (file) {
      const existing = errorsByScenario.get(file) || [];
      existing.push(line);
      errorsByScenario.set(file, existing);
    } else {
      unattributedErrors.push(line);
    }
  }
}, 120_000);

afterAll(() => {
  if (consumerDirectory) {
    fs.rmSync(consumerDirectory, {recursive: true, force: true});
  }
});

describe('published DTS consumer', () => {
  it('discovers scenario files', () => {
    expect(scenarioFiles.length).toBeGreaterThan(0);
  });

  it.each(scenarioFiles)('%s', (file) => {
    expect(errorsByScenario.get(file) || []).toStrictEqual([]);
  });

  it('produces no errors outside the scenario files', () => {
    expect(unattributedErrors).toStrictEqual([]);
  });
});
