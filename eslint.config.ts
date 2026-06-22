import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  ignores: ['test/published-dts/scenarios/**'],
  configs: {
    ts: {
      allowDefaultProject: ['*.config.*ts'],
    },

    // Not working with ESLint 10:
    arrowReturnStyle: false,

    // False positives:
    rxjs: false,
    zod: false,
  },
});
