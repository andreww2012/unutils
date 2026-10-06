import fs from 'node:fs';
import path from 'node:path';
import {eslintConfig} from 'eslint-config-un';
import {
  GLOB_JS_TS_X_EXTENSION,
  GLOB_MARKDOWN,
  GLOB_YML_YAML_EXTENSION,
} from 'eslint-config-un/globs';
import oxfmtConfig from './oxfmt.config.ts';

const PACKAGE_DOC_EXTENSION_REGEX = /\.md$/;

// Every bundled package has its own doc, like `@antfu__utils.md` for `@antfu/utils`.
// DefinitelyTyped uses the same naming, like `@types/antfu__utils`
const bundledPackages = fs
  .readdirSync(path.join(import.meta.dirname, 'docs/packages'))
  .flatMap((fileName) => {
    const typesName = fileName.replace(PACKAGE_DOC_EXTENSION_REGEX, '');
    return [typesName.replace('__', '/'), `@types/${typesName}`];
  });

export default eslintConfig({
  ignores: [
    '.agents/guidelines.md', // Copied from an external source
    'CHANGELOG.md', // Auto-generated
    'LICENSE.md',
    'test/published-dts/scenarios/**',
  ],
  mode: 'lib',
  defaultConfigsStatus: 'misc-enabled',
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
    format: {
      files: [
        // TODO replace with `GLOB_MARKDOWN_SUPPORTED_CODE_BLOCKS` from eslint-config-un
        // once it's exported
        `${GLOB_MARKDOWN}/**/*.{${GLOB_JS_TS_X_EXTENSION},json,jsonc,json5,${GLOB_YML_YAML_EXTENSION}}`,
      ],
      formatter: [
        'oxfmt',
        {
          bracketSpacing: oxfmtConfig.bracketSpacing,
          printWidth: oxfmtConfig.printWidth,
          singleQuote: oxfmtConfig.singleQuote,
        },
      ],
    },
    import: {
      extraneousDependenciesCheck: (defaultIgnorePatterns) => ({
        checkDevDependencies: {
          ignorePatterns: [...defaultIgnorePatterns, 'test/setup.ts'],
        },
        // Bundled, so they don't have to be in `dependencies`
        whitelist: bundledPackages,
      }),
      requireModuleExtensions: true,
    },
    markdown: {
      // Uses Prettier with default options, which conflicts with oxfmt above
      configFormatFencedCodeBlocks: false,
      configSentencesPerLine: {
        // Putting every sentence on its own line causes line wraps in the changelog
        ignores: ['.changeset/**/*.md'],
      },
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
