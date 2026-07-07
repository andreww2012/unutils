import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import {jsonParse} from '../src/json/json-parse.ts';
import {ensurePrefix} from '../src/string/ensure-prefix.ts';

const MAIN_BRANCH = 'main';
const SCOPED_PUBLISH_BRANCH = 'feat/scoped-package-publishing';

const ROOT = path.resolve(import.meta.dirname, '..');
const PACKAGE_JSON_PATH = path.join(ROOT, 'package.json');

const getCurrentBranch = () => {
  const {GITHUB_REF_NAME: githubRefNameEnv} = process.env;
  if (githubRefNameEnv) {
    return githubRefNameEnv;
  }

  // eslint-disable-next-line sonarjs/no-os-command-from-path -- `git` is part of the trusted CI/dev toolchain, resolved from a trusted PATH.
  return execFileSync('git', ['rev-parse', '--abbrev-ref', 'HEAD'], {
    cwd: ROOT,
    encoding: 'utf8',
  }).trim();
};

const publish = () => {
  // eslint-disable-next-line sonarjs/no-os-command-from-path -- `pnpm` is the pinned CI/dev toolchain, resolved from a trusted PATH.
  execFileSync('pnpm', ['exec', 'changeset', 'publish'], {stdio: 'inherit'});
};

const run = () => {
  const currentBranch = getCurrentBranch();

  if (currentBranch !== MAIN_BRANCH && currentBranch !== SCOPED_PUBLISH_BRANCH) {
    throw new Error(
      `Refusing to publish from "${currentBranch}": releases are only allowed from "${MAIN_BRANCH}" or "${SCOPED_PUBLISH_BRANCH}".`,
    );
  }

  if (currentBranch === MAIN_BRANCH) {
    publish();
    return;
  }

  const packageJsonText = fs.readFileSync(PACKAGE_JSON_PATH, 'utf8');
  const packageJson = jsonParse<{name: string; author: string}>(packageJsonText);

  packageJson.name = `${ensurePrefix(packageJson.author, '@')}/${packageJson.name}`;

  fs.writeFileSync(PACKAGE_JSON_PATH, `${JSON.stringify(packageJson, null, 2)}\n`);

  try {
    publish();
  } finally {
    fs.writeFileSync(PACKAGE_JSON_PATH, packageJsonText);
  }
};

run();
