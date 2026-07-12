import type {CSpellSettings} from 'cspell';

const GLOBALLY_IGNORED_WORDS = {
  names: [
    'unutils',
    'sonarjs',
    'destr',
    'yieldable',
    'ark',
    'arkregex',
    'arktype',
    'cleye',
    'neotraverse',
    'andreww',
  ],
  misc: ['knipignore', 'rearg', 'GHSA'],
  englishIshWords: ['arrayify', 'customizer', 'deburr', 'iteratees', 'nullary', 'stringifiers'],
  typeFest: ['jsonify', 'jsonifiable', 'arrayable', 'asyncify', 'optionalize'],
} satisfies Record<string, string[]>;

export default {
  useGitignore: true,
  enableGlobDot: true,
  ignorePaths: [
    '**/.gitignore',
    '**/.git/**',
    '**/pnpm-lock.yaml',
    'patches/**',
    '.all-contributorsrc',
  ],
  dictionaries: ['npm', 'node', 'typescript', 'fullstack'],
  overrides: [
    {
      filename: ['package.json', 'cspell.config.*s'],
      words: ['andreww'],
    },
  ],
  words: Object.values(GLOBALLY_IGNORED_WORDS).flat(),
} satisfies CSpellSettings;
