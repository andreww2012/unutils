import type {MergeExclusive} from '../../src/types/merge-exclusive.ts';

describe('types/MergeExclusive', () => {
  it('basic test', () => {
    expectTypeOf<
      {a: 1} extends MergeExclusive<{a: 1}, {b: 2}> ? true : false
    >().toEqualTypeOf<true>();
    expectTypeOf<
      {a: 1; b: 2} extends MergeExclusive<{a: 1}, {b: 2}> ? true : false
    >().toEqualTypeOf<false>();
  });
});
