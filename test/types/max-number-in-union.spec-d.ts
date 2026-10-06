import type {MaxNumberInUnion} from '../../src/types/max-number-in-union.ts';

describe('types/MaxNumberInUnion', () => {
  it('returns the largest number of a union', () => {
    expectTypeOf<MaxNumberInUnion<0 | 2 | 5>>().toEqualTypeOf<5>();
  });

  it('returns number for a non-literal number', () => {
    expectTypeOf<MaxNumberInUnion<number>>().toEqualTypeOf<number>();
  });
});
