import type {ToKebabCaseKeysDeep} from '../../src/types/to-kebab-case-keys-deep.ts';

describe('types/ToKebabCaseKeysDeep', () => {
  it('basic test', () => {
    expectTypeOf<ToKebabCaseKeysDeep<{fooBar: {aB: 1}}>>().toEqualTypeOf<{
      'foo-bar': {'a-b': 1};
    }>();
  });
});
