import {arraySwapIndices} from '../../src/array/array-swap-indices.ts';

describe('array/arraySwapIndices', () => {
  it('swaps the elements at the two indices', () => {
    expect(arraySwapIndices([1, 2, 3, 4], 0, 2)).toStrictEqual([3, 2, 1, 4]);
  });

  it('counts negative indices from the end', () => {
    expect(arraySwapIndices([1, 2, 3, 4], 0, -1)).toStrictEqual([4, 2, 3, 1]);
  });

  it('leaves the copy unchanged for an out-of-bounds index', () => {
    expect(arraySwapIndices([1, 2, 3], 0, 10)).toStrictEqual([1, 2, 3]);
  });

  it('leaves the copy unchanged for a NaN index', () => {
    expect(arraySwapIndices([1, 2, 3], 0, Number.NaN)).toStrictEqual([1, 2, 3]);
  });

  it('does not mutate the input', () => {
    const source = [1, 2, 3];
    const result = arraySwapIndices(source, 0, 2);

    expect(result).not.toBe(source);
    expect(source).toStrictEqual([1, 2, 3]);
  });
});
