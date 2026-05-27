import {arrayUnion} from '../../src/array/array-union.ts';

describe('array/arrayUnion', () => {
  describe('basic equality (no third argument)', () => {
    it('returns unique elements from both arrays', () => {
      expect(arrayUnion([1, 2, 3], [3, 4, 5])).toStrictEqual([1, 2, 3, 4, 5]);
    });

    it('returns first array when second is empty', () => {
      expect(arrayUnion([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
    });

    it('returns second array when first is empty', () => {
      expect(arrayUnion([], [1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    it('returns empty array when both are empty', () => {
      expect(arrayUnion([], [])).toStrictEqual([]);
    });

    it('returns all elements when there is no overlap', () => {
      expect(arrayUnion([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
    });

    it('deduplicates when arrays are identical', () => {
      expect(arrayUnion([1, 2, 3], [1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    it('works with strings', () => {
      expect(arrayUnion(['a', 'b'], ['b', 'c'])).toStrictEqual(['a', 'b', 'c']);
    });

    it('preserves first-appearance order', () => {
      expect(arrayUnion([3, 1, 2], [2, 4, 3])).toStrictEqual([3, 1, 2, 4]);
    });

    it('deduplicates duplicates within the first array', () => {
      expect(arrayUnion([1, 1, 2], [3])).toStrictEqual([1, 2, 3]);
    });
  });

  describe('with mapper (unionBy)', () => {
    it('compares by mapped values', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 2}, {id: 3}];

      expect(arrayUnion(array1, array2, (item) => item.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
      ]);
    });

    it('returns all elements when no mapped values overlap', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 3}, {id: 4}];

      expect(arrayUnion(array1, array2, (item) => item.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
      ]);
    });

    it('deduplicates when all mapped values overlap', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 1}, {id: 2}];

      expect(arrayUnion(array1, array2, (item) => item.id)).toStrictEqual([{id: 1}, {id: 2}]);
    });

    it('returns second array when first is empty', () => {
      expect(arrayUnion([], [{id: 1}], (item) => item.id)).toStrictEqual([{id: 1}]);
    });

    it('returns first array when second is empty', () => {
      expect(arrayUnion([{id: 1}], [], (item) => item.id)).toStrictEqual([{id: 1}]);
    });
  });

  describe('with comparator (unionWith)', () => {
    it('uses custom equality to compute union', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 2}, {id: 3}];

      expect(arrayUnion(array1, array2, (a, b) => a.id === b.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
      ]);
    });

    it('returns all elements when no comparisons match', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 3}, {id: 4}];

      expect(arrayUnion(array1, array2, (a, b) => a.id === b.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
      ]);
    });

    it('deduplicates when all elements match', () => {
      const array1 = [{id: 1}, {id: 2}];
      const array2 = [{id: 1}, {id: 2}];

      expect(arrayUnion(array1, array2, (a, b) => a.id === b.id)).toStrictEqual([{id: 1}, {id: 2}]);
    });

    it('returns second array when first is empty', () => {
      const empty: {id: number}[] = [];

      expect(arrayUnion(empty, [{id: 1}], (a, b) => a.id === b.id)).toStrictEqual([{id: 1}]);
    });

    it('returns first array when second is empty', () => {
      const empty: {id: number}[] = [];

      expect(arrayUnion([{id: 1}], empty, (a, b) => a.id === b.id)).toStrictEqual([{id: 1}]);
    });
  });
});
