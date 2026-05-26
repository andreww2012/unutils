import {arrayPurgeBy} from '../../src/array/array-purge-by.ts';

describe('array/arrayPurgeBy', () => {
  it('basic test', () => {
    const numbers = [1, 2, 3, 4, 5];

    expect(arrayPurgeBy(numbers, (value) => value % 2 === 0)).toStrictEqual([2, 4]);
    expect(numbers).toStrictEqual([1, 3, 5]);
  });
});
