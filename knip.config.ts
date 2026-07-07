import type {KnipConfig} from 'knip';

export default {
  entry: [
    '.ncurc.cjs', // cspell:disable-line
    'scripts/publish.ts', // Referenced from the release workflow, not `package.json`
    'src/*/index.ts', // Some symbols are not exported in the main entrypoint, making knip think they are unused (example: server)
  ],
  ignore: ['test/published-dts/scenarios/**'],
  tags: ['-knipignore'],
  treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
