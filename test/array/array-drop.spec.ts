import {arrayDrop} from '../../src/array/array-drop.ts';

describe('array/arrayDrop', () => {
  describe('with items count (drop)', () => {
    it('drops the specified number of elements from the beginning', () => {
      expect(arrayDrop([1, 2, 3, 4, 5], 2)).toStrictEqual([3, 4, 5]);
    });

    it('returns a copy of the array when count is 0', () => {
      const input = [1, 2, 3];
      const result = arrayDrop(input, 0);

      expect(result).toStrictEqual([1, 2, 3]);
      expect(result).not.toBe(input);
    });

    it('returns an empty array when count equals array length', () => {
      expect(arrayDrop([1, 2, 3], 3)).toStrictEqual([]);
    });

    it('returns an empty array when count exceeds array length', () => {
      expect(arrayDrop([1, 2, 3], 10)).toStrictEqual([]);
    });

    it('returns an empty array when called on an empty array', () => {
      expect(arrayDrop([], 2)).toStrictEqual([]);
    });

    it('works with strings', () => {
      expect(arrayDrop(['a', 'b', 'c', 'd'], 1)).toStrictEqual(['b', 'c', 'd']);
    });

    it('works with objects', () => {
      expect(arrayDrop([{id: 1}, {id: 2}, {id: 3}], 1)).toStrictEqual([{id: 2}, {id: 3}]);
    });
  });

  describe('with predicate (dropWhile)', () => {
    it('drops elements from the start while the predicate returns true', () => {
      expect(arrayDrop([1, 2, 3, 4, 5], (item) => item < 3)).toStrictEqual([3, 4, 5]);
    });

    it('stops dropping at the first element for which the predicate returns false', () => {
      expect(arrayDrop([1, 2, 3, 1, 2], (item) => item < 3)).toStrictEqual([3, 1, 2]);
    });

    it('returns the full array when the predicate is false for the first element', () => {
      expect(arrayDrop([5, 1, 2, 3], (item) => item < 3)).toStrictEqual([5, 1, 2, 3]);
    });

    it('returns an empty array when the predicate is true for every element', () => {
      expect(arrayDrop([1, 2, 3], () => true)).toStrictEqual([]);
    });

    it('returns an empty array when called on an empty array', () => {
      expect(arrayDrop([], () => true)).toStrictEqual([]);
    });

    it('passes the index and the array to the predicate', () => {
      const calls: {item: number; index: number; array: readonly number[]}[] = [];
      const input = [10, 20, 30];

      arrayDrop(input, (item, index, array) => {
        calls.push({item, index, array});
        return item < 20;
      });

      expect(calls).toStrictEqual([
        {item: 10, index: 0, array: input},
        {item: 20, index: 1, array: input},
      ]);
    });

    it('works with objects via predicate', () => {
      const input = [{id: 1}, {id: 2}, {id: 3}];

      expect(arrayDrop(input, (item) => item.id < 3)).toStrictEqual([{id: 3}]);
    });
  });
});
