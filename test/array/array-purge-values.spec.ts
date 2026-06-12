import {arrayPurgeValues} from '../../src/array/array-purge-values.ts';

describe('array/arrayPurgeValues', () => {
  it('mutates the array and removes values by SameValueZero', () => {
    const numbers = [1, 2, 3, 4, 5, 2, 4];
    const result = arrayPurgeValues(numbers, [2, 4]);

    expect(result).toBe(numbers);
    expect(result).toStrictEqual([1, 3, 5]);
  });

  it('removes by a derived key with a mapper', () => {
    const array = [{id: 1}, {id: 2}, {id: 3}];
    const result = arrayPurgeValues(array, [{id: 2}], (item) => item.id);

    expect(result).toStrictEqual([{id: 1}, {id: 3}]);
  });

  it('removes by a custom comparator', () => {
    const array = [{id: 1}, {id: 2}, {id: 3}];
    const result = arrayPurgeValues(array, [{id: 2}], (a, b) => a.id === b.id);

    expect(result).toStrictEqual([{id: 1}, {id: 3}]);
  });
});
