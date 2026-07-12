// cspell:ignore npmx

import fs from 'node:fs';
import path from 'node:path';
import {jsonParse} from '../src/json/json-parse.ts';
import {regexEscape} from '../src/regex/regex-escape.ts';

const ROOT = path.resolve(import.meta.dirname, '..');
const NODE_MODULES = path.join(ROOT, 'node_modules');
const PNPM_STORE = path.join(NODE_MODULES, '.pnpm');
// The actual set of bundled packages is whatever `tsdown` emits here, which includes
// transitively bundled dependencies the declared `BUNDLED_PACKAGES` list does not track.
const DIST_PNPM = path.join(ROOT, 'dist', 'node_modules', '.pnpm');
const NOTICES_PATH = path.join(ROOT, 'THIRD_PARTY_NOTICES.md');

const TABLE_START = '<!-- THIRD_PARTY_NOTICES_TABLE:START -->';
const TABLE_END = '<!-- THIRD_PARTY_NOTICES_TABLE:END -->';
const GENERATED_NOTE =
  '<!-- The table below is generated automatically upon publishing; do not edit it by hand. -->';
const NPMX_BASE = 'https://npmx.dev';

const TABLE_REGION_REGEX = new RegExp(
  String.raw`${regexEscape(TABLE_START)}[\s\S]*?${regexEscape(TABLE_END)}`,
);
// Grouping parentheses SPDX allows around a whole expression, e.g. `(MIT OR CC0-1.0)`.
const WRAPPING_PARENS_REGEX = /^\((.*)\)$/;

const collectBundledPackageNames = () => {
  const names = new Set<string>();

  for (const storeEntry of fs.readdirSync(DIST_PNPM)) {
    const entryNodeModules = path.join(DIST_PNPM, storeEntry, 'node_modules');
    if (!fs.existsSync(entryNodeModules)) {
      continue;
    }

    for (const scopeOrName of fs.readdirSync(entryNodeModules)) {
      if (scopeOrName.startsWith('@')) {
        for (const scopedName of fs.readdirSync(path.join(entryNodeModules, scopeOrName))) {
          names.add(`${scopeOrName}/${scopedName}`);
        }
      } else {
        names.add(scopeOrName);
      }
    }
  }

  // eslint-disable-next-line unicorn/no-array-sort
  return [...names].sort();
};

const resolvePackageJsonPath = (packageName: string) => {
  const directPath = path.join(NODE_MODULES, packageName, 'package.json');
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  // Transitively bundled dependencies live only in pnpm's virtual store, not at the top level.
  const storePrefix = `${packageName.replaceAll('/', '+')}@`;
  const storeEntry = fs.readdirSync(PNPM_STORE).find((entry) => entry.startsWith(storePrefix));
  if (storeEntry == null) {
    throw new Error(`Cannot locate the installed package "${packageName}".`);
  }

  return path.join(PNPM_STORE, storeEntry, 'node_modules', packageName, 'package.json');
};

interface PackageRow {
  packageCell: string;
  versionCell: string;
  licenseCell: string;
}

const buildTable = () => {
  const rows = collectBundledPackageNames().map<PackageRow>((name) => {
    const {version, license} = jsonParse<{version: string; license?: string}>(
      fs.readFileSync(resolvePackageJsonPath(name), 'utf8'),
    );
    if (!license) {
      throw new Error(`Package "${name}" is missing a "license" field in its package.json.`);
    }

    return {
      packageCell: `[\`${name}\`](${NPMX_BASE}/${name})`,
      versionCell: `[${version}](${NPMX_BASE}/${name}/v/${version})`,
      licenseCell: license.replace(WRAPPING_PARENS_REGEX, '$1'),
    };
  });

  const header: PackageRow = {
    packageCell: 'Package',
    versionCell: 'Version',
    licenseCell: 'License',
  };
  const allRows = [header, ...rows];
  const widthOf = (pick: (row: PackageRow) => string) =>
    Math.max(...allRows.map((row) => pick(row).length));
  const packageWidth = widthOf((row) => row.packageCell);
  const versionWidth = widthOf((row) => row.versionCell);
  const licenseWidth = widthOf((row) => row.licenseCell);

  const formatRow = ({packageCell, versionCell, licenseCell}: PackageRow) =>
    `| ${packageCell.padEnd(packageWidth)} | ${versionCell.padEnd(versionWidth)} | ${licenseCell.padEnd(licenseWidth)} |`;

  return [
    formatRow(header),
    `| ${'-'.repeat(packageWidth)} | ${'-'.repeat(versionWidth)} | ${'-'.repeat(licenseWidth)} |`,
    ...rows.map(formatRow),
  ].join('\n');
};

const run = () => {
  if (!fs.existsSync(DIST_PNPM)) {
    throw new Error(`Missing "${DIST_PNPM}". Run \`pnpm build\` before generating the notices.`);
  }

  const noticesText = fs.readFileSync(NOTICES_PATH, 'utf8');
  if (!TABLE_REGION_REGEX.test(noticesText)) {
    throw new Error(
      `Could not find the "${TABLE_START}"…"${TABLE_END}" region in ${NOTICES_PATH}.`,
    );
  }

  const region = `${TABLE_START}\n\n${GENERATED_NOTE}\n\n${buildTable()}\n\n${TABLE_END}`;
  fs.writeFileSync(
    NOTICES_PATH,
    noticesText.replace(TABLE_REGION_REGEX, () => region),
  );
};

run();
