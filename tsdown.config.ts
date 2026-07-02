import fs from 'node:fs';
import path from 'node:path';
import {defineConfig} from 'tsdown';

const utilityGroups = fs
  .readdirSync(path.join(import.meta.dirname, 'src'), {withFileTypes: true})
  .filter((entry) => entry.isDirectory() && !entry.name.startsWith('_'))
  .map((entry) => entry.name);

export default defineConfig({
  entry: ['src/index.ts', ...utilityGroups.map((groupName) => `src/${groupName}/index.ts`)],
  format: 'esm',
  unbundle: true,
  dts: true,
  // Without this, problems from attw and publint are not causing non-zero exit code
  failOnWarn: true,
  attw: {
    profile: 'esm-only',
  },
  publint: true,
});
