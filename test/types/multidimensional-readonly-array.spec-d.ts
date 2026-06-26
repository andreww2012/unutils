import type {MultidimensionalReadonlyArray} from '../../src/types/multidimensional-readonly-array.ts';

describe('types/MultidimensionalReadonlyArray', () => {
  it('basic test', () => {
    expectTypeOf<MultidimensionalReadonlyArray<number, 2>>().toEqualTypeOf<
      readonly (readonly number[])[]
    >();
  });
});
