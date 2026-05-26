import {arrayPartition} from '../../src/array/array-partition.ts';

describe('array/arrayPartition', () => {
  it('basic test', () => {
    expect(arrayPartition([1, 2, 3, 4], (value) => value % 2 === 0)).toStrictEqual([
      [2, 4],
      [1, 3],
    ]);
  });
});
