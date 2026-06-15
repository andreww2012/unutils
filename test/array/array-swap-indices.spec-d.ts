import {arraySwapIndices} from '../../src/array/array-swap-indices.ts';

describe('array/arraySwapIndices', () => {
  it('swaps the element types at the two literal indices of a tuple', () => {
    expectTypeOf(arraySwapIndices(['a', 1, true] as const, 0, 2)).toEqualTypeOf<[true, 1, 'a']>();
  });

  it('falls back to an element array for a regular array', () => {
    expectTypeOf(arraySwapIndices([1, 2, 3], 0, 2)).toEqualTypeOf<number[]>();
  });
});
