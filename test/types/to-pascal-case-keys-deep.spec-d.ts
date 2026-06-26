import type {ToPascalCaseKeysDeep} from '../../src/types/to-pascal-case-keys-deep.ts';

describe('types/ToPascalCaseKeysDeep', () => {
  it('basic test', () => {
    expectTypeOf<ToPascalCaseKeysDeep<{'foo-bar': {'a-b': 1}}>>().toEqualTypeOf<{
      FooBar: {AB: 1};
    }>();
  });
});
