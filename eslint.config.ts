import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  ignores: [
    'CHANGELOG.md', // Auto-generated
    'LICENSE.md',
    'test/published-dts/scenarios/**',
  ],
  extraConfigs: [
    {
      // The package docs intentionally use a `Package:` prefix in their title.
      files: ['docs/packages/*.md'],
      rules: {
        'markdown-preferences/no-heading-trailing-punctuation': 'off',
      },
    },
    {
      files: ['src/**/*.global.ts'],
      rules: {
        'ts/method-signature-style': [2, 'method'],
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
