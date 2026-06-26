import type {MultidimensionalArray} from '../../src/types/multidimensional-array.ts';

describe('types/MultidimensionalArray', () => {
  it('basic test', () => {
    expectTypeOf<MultidimensionalArray<number, 2>>().toEqualTypeOf<number[][]>();
  });
});
