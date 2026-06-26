import type {ToCamelCaseKeysDeep} from '../../src/types/to-camel-case-keys-deep.ts';

describe('types/ToCamelCaseKeysDeep', () => {
  it('basic test', () => {
    expectTypeOf<ToCamelCaseKeysDeep<{'foo-bar': {'a-b': 1}}>>().toEqualTypeOf<{
      fooBar: {aB: 1};
    }>();
  });
});
