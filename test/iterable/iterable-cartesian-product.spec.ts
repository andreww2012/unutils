import {iterableCartesianProduct} from '../../src/iterable/iterable-cartesian-product.ts';

describe('iterable/iterableCartesianProduct', () => {
  it('yields every combination in lexicographic order', () => {
    expect([...iterableCartesianProduct([1, 2], new Set(['a', 'b']))]).toStrictEqual([
      [1, 'a'],
      [1, 'b'],
      [2, 'a'],
      [2, 'b'],
    ]);
  });
});
