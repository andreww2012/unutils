import {defineConfig} from 'tsdown';

const UTILITY_GROUPS: string[] = ['array'];

export default defineConfig({
  entry: ['src/index.ts', ...UTILITY_GROUPS.map((groupName) => `src/${groupName}/index.ts`)],
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
