import {arrayUnique} from '../../src/array/array-unique.ts';

describe('array/arrayUnique', () => {
  describe('basic equality (no second argument)', () => {
    it('removes duplicate numbers', () => {
      expect(arrayUnique([1, 2, 1, 3, 2])).toStrictEqual([1, 2, 3]);
    });

    it('returns the same elements when all are unique', () => {
      expect(arrayUnique([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    it('returns an empty array for an empty input', () => {
      expect(arrayUnique([])).toStrictEqual([]);
    });

    it('works with strings', () => {
      expect(arrayUnique(['a', 'b', 'a', 'c'])).toStrictEqual(['a', 'b', 'c']);
    });

    it('preserves insertion order', () => {
      expect(arrayUnique([3, 1, 2, 1, 3])).toStrictEqual([3, 1, 2]);
    });

    it('returns a single element when all elements are equal', () => {
      expect(arrayUnique([1, 1, 1])).toStrictEqual([1]);
    });
  });

  describe('with mapper (uniqBy)', () => {
    it('deduplicates by a derived key', () => {
      const array = [
        {id: 1, value: 'a'},
        {id: 2, value: 'b'},
        {id: 1, value: 'c'},
      ];

      expect(arrayUnique(array, (item) => item.id)).toStrictEqual([
        {id: 1, value: 'a'},
        {id: 2, value: 'b'},
      ]);
    });

    it('keeps the first occurrence', () => {
      const array = [
        {id: 1, order: 1},
        {id: 1, order: 2},
        {id: 1, order: 3},
      ];

      expect(arrayUnique(array, (item) => item.id)).toStrictEqual([{id: 1, order: 1}]);
    });

    it('returns all elements when all keys are unique', () => {
      const array = [{id: 1}, {id: 2}, {id: 3}];

      expect(arrayUnique(array, (item) => item.id)).toStrictEqual([{id: 1}, {id: 2}, {id: 3}]);
    });

    it('returns an empty array for an empty input', () => {
      expect(arrayUnique([], (item: {id: number}) => item.id)).toStrictEqual([]);
    });
  });

  describe('with comparator (uniqWith)', () => {
    it('deduplicates using a custom equality check', () => {
      const array = [{id: 1}, {id: 2}, {id: 1}];

      expect(arrayUnique(array, (a, b) => a.id === b.id)).toStrictEqual([{id: 1}, {id: 2}]);
    });

    it('keeps the first occurrence', () => {
      const array = [
        {id: 1, order: 1},
        {id: 1, order: 2},
      ];

      expect(arrayUnique(array, (a, b) => a.id === b.id)).toStrictEqual([{id: 1, order: 1}]);
    });

    it('returns all elements when no two elements are equal', () => {
      const array = [{id: 1}, {id: 2}, {id: 3}];

      expect(arrayUnique(array, (a, b) => a.id === b.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
      ]);
    });

    it('returns an empty array for an empty input', () => {
      const empty: {id: number}[] = [];

      expect(arrayUnique(empty, (a, b) => a.id === b.id)).toStrictEqual([]);
    });
  });
});
