import type {ToDelimiterCaseKeysDeep} from '../../src/types/to-delimiter-case-keys-deep.ts';

describe('types/ToDelimiterCaseKeysDeep', () => {
  it('basic test', () => {
    expectTypeOf<ToDelimiterCaseKeysDeep<{fooBar: {aB: 1}}, '/'>>().toEqualTypeOf<{
      'foo/bar': {'a/b': 1};
    }>();
  });
});
