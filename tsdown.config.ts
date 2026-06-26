import fs from 'node:fs';
import path from 'node:path';
import {defineConfig} from 'tsdown';
import {BUNDLED_PACKAGES} from './meta.js';
import {regexEscape} from './src/regex/regex-escape.ts';

const utilityGroups = fs
  .readdirSync(path.join(import.meta.dirname, 'src'), {withFileTypes: true})
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
  .map((entry) => entry.name);

const bundledPackagesPattern = new RegExp(
  `^(?:${BUNDLED_PACKAGES.map(regexEscape).join('|')})(?:/.+)?$`,
);

export default defineConfig({
  entry: ['src/index.ts', ...utilityGroups.map((groupName) => `src/${groupName}/index.ts`)],
  format: 'esm',
  unbundle: true,
  dts: true,
  deps: {
    alwaysBundle: [bundledPackagesPattern],
  },
  // Without this, problems from attw and publint are not causing non-zero exit code
  failOnWarn: true,
  attw: {
    profile: 'esm-only',
  },
  publint: true,
});
