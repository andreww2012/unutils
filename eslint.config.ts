import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  ignores: ['test/published-dts/scenarios/**'],
  extraConfigs: [
    {
      // The package docs intentionally use a `Package:` prefix in their title.
      files: ['docs/packages/*.md'],
      rules: {
        'markdown-preferences/no-heading-trailing-punctuation': 'off',
      },
    },
  ],
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
