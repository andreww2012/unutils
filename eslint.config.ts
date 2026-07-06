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
    // Fixes "The following rules do not support the language "jsonc/x""
    {
      files: ['**/*.json'],
      rules: {
        'unicorn/no-process-exit': 0,
        'unicorn/prefer-import-meta-properties': 0,
      },
    },
  ],
  configs: {
    fileProgress: true,
    import: {
      requireModuleExtensions: true,
    },
    ts: {
      allowDefaultProject: ['*.config.*ts'],
    },
    unicorn: {
      ignores: [
        '**/*.json', // Fixes "The following rules do not support the language "jsonc/x""
      ],
      overrides: {
        'unicorn/consistent-boolean-name': (severity, options) => ({
          severity,
          options: [{...options?.[0], ignore: ['^predicate$']}],
        }),
      },
    },

    // False positives:
    rxjs: false,
    zod: false,
  },
});
