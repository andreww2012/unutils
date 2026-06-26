import type {MutuallyExclusiveUnion} from '../../src/types/mutually-exclusive-union.ts';

describe('types/MutuallyExclusiveUnion', () => {
  it('basic test', () => {
    expectTypeOf<
      MutuallyExclusiveUnion<{a: 1} | {b: 2}> extends {a: 1} | {b: 2} ? true : false
    >().toEqualTypeOf<true>();
  });
});
