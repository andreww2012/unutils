import {arrayPurgeValues} from '../../src/array/array-purge-values.ts';

describe('array/arrayPurgeValues', () => {
  it('basic test', () => {
    const numbers = [1, 2, 3, 4, 5, 2, 4];

    expect(arrayPurgeValues(numbers, [2, 4])).toStrictEqual([1, 3, 5]);
    expect(numbers).toStrictEqual([1, 3, 5]);
  });
});
