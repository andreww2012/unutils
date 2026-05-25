import fs from 'node:fs';
import path from 'node:path';
import {defineConfig} from 'tsdown';

const utilityGroups = fs
  .readdirSync(path.join(import.meta.dirname, 'src'), {withFileTypes: true})
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);

export default defineConfig({
  entry: ['src/index.ts', ...utilityGroups.map((groupName) => `src/${groupName}/index.ts`)],
  format: 'esm',
  unbundle: true,
  dts: true,
  deps: {
    // Must be in sync with `eslint.config.ts`'s `extraneousDependenciesWhitelist`:
    alwaysBundle: [
      // eslint-disable-next-line regexp/no-useless-non-capturing-group, security/detect-unsafe-regex
      /^(?:es-toolkit)(?:\/.+)?$/,
    ],
  },
  // Without this, problems from attw and publint are not causing non-zero exit code
  failOnWarn: true,
  attw: {
    profile: 'esm-only',
  },
  publint: true,
});
