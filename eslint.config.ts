import {eslintConfig} from 'eslint-config-un';

export default eslintConfig({
  defaultConfigsStatus: 'misc-enabled',
  configs: {
    ts: {
      allowDefaultProject: ['*.config.*ts'],
    },

    // False positives:
    zod: false,
  },
});
