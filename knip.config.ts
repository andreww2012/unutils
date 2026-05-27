import type {KnipConfig} from 'knip';

export default {
  entry: [
    '.ncurc.cjs', // cspell:disable-line
    'src/*/index.ts', // Some symbols are not exported in the main entrypoint, making knip think they are unused (example: server)
  ],
  tags: ['-knipignore'],
  treatConfigHintsAsErrors: true,
} satisfies KnipConfig;
