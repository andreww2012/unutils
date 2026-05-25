import {arrayDropRight} from '../../src/array/array-drop-right.ts';

describe('array/arrayDropRight', () => {
  describe('with items count (dropRight)', () => {
    it('drops the specified number of elements from the end', () => {
      expect(arrayDropRight([1, 2, 3, 4, 5], 2)).toStrictEqual([1, 2, 3]);
    });

    it('returns a copy of the array when count is 0', () => {
      const input = [1, 2, 3];
      const result = arrayDropRight(input, 0);

      expect(result).toStrictEqual([1, 2, 3]);
      expect(result).not.toBe(input);
    });

    it('returns an empty array when count equals array length', () => {
      expect(arrayDropRight([1, 2, 3], 3)).toStrictEqual([]);
    });

    it('returns an empty array when count exceeds array length', () => {
      expect(arrayDropRight([1, 2, 3], 10)).toStrictEqual([]);
    });

    it('returns an empty array when called on an empty array', () => {
      expect(arrayDropRight([], 2)).toStrictEqual([]);
    });

    it('works with strings', () => {
      expect(arrayDropRight(['a', 'b', 'c', 'd'], 1)).toStrictEqual(['a', 'b', 'c']);
    });

    it('works with objects', () => {
      expect(arrayDropRight([{id: 1}, {id: 2}, {id: 3}], 1)).toStrictEqual([{id: 1}, {id: 2}]);
    });
  });

  describe('with predicate (dropRightWhile)', () => {
    it('drops elements from the end while the predicate returns true', () => {
      expect(arrayDropRight([1, 2, 3, 4, 5], (item) => item > 3)).toStrictEqual([1, 2, 3]);
    });

    it('stops dropping at the first element (from the end) for which the predicate returns false', () => {
      expect(arrayDropRight([5, 4, 3, 4, 5], (item) => item > 3)).toStrictEqual([5, 4, 3]);
    });

    it('returns the full array when the predicate is false for the last element', () => {
      expect(arrayDropRight([4, 5, 6, 1], (item) => item > 3)).toStrictEqual([4, 5, 6, 1]);
    });

    it('returns an empty array when the predicate is true for every element', () => {
      expect(arrayDropRight([1, 2, 3], () => true)).toStrictEqual([]);
    });

    it('returns an empty array when called on an empty array', () => {
      expect(arrayDropRight([], () => true)).toStrictEqual([]);
    });

    it('passes the index and the array to the predicate', () => {
      const calls: {item: number; index: number; array: readonly number[]}[] = [];
      const input = [10, 20, 30];

      arrayDropRight(input, (item, index, array) => {
        calls.push({item, index, array});
        return item > 20;
      });

      expect(calls).toStrictEqual([
        {item: 30, index: 2, array: input},
        {item: 20, index: 1, array: input},
      ]);
    });

    it('works with objects via predicate', () => {
      const input = [{id: 1}, {id: 2}, {id: 3}];

      expect(arrayDropRight(input, (item) => item.id > 1)).toStrictEqual([{id: 1}]);
    });
  });
});
