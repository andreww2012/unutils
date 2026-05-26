import {arrayPurgeIndexes} from '../../src/array/array-purge-indexes.ts';

describe('array/arrayPurgeIndexes', () => {
  it('basic test', () => {
    const numbers = [10, 20, 30, 40, 50];

    expect(arrayPurgeIndexes(numbers, [1, 3, 4])).toStrictEqual([20, 40, 50]);
    expect(numbers).toStrictEqual([10, 30]);
  });
});
