import {arraySymmetricDifference} from '../../src/array/array-symmetric-difference.ts';

describe('array/arraySymmetricDifference', () => {
  describe('basic equality (no third argument)', () => {
    it('returns elements present in exactly one array', () => {
      expect(arraySymmetricDifference([1, 2, 3, 4], [3, 4, 5, 6])).toStrictEqual([1, 2, 5, 6]);
    });

    it('returns first array when second is empty', () => {
      expect(arraySymmetricDifference([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
    });

    it('returns second array when first is empty', () => {
      expect(arraySymmetricDifference([], [1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    it('returns empty array when both are empty', () => {
      expect(arraySymmetricDifference([], [])).toStrictEqual([]);
    });

    it('returns empty array when arrays are identical', () => {
      expect(arraySymmetricDifference([1, 2, 3], [1, 2, 3])).toStrictEqual([]);
    });

    it('returns all elements when there is no overlap', () => {
      expect(arraySymmetricDifference([1, 2], [3, 4])).toStrictEqual([1, 2, 3, 4]);
    });

    it('works with strings', () => {
      expect(arraySymmetricDifference(['a', 'b'], ['b', 'c'])).toStrictEqual(['a', 'c']);
    });

    it('preserves first-appearance order across both arrays', () => {
      expect(arraySymmetricDifference([3, 1, 2], [2, 4, 3])).toStrictEqual([1, 4]);
    });

    it('deduplicates duplicates within a single array', () => {
      expect(arraySymmetricDifference([1, 1, 2], [3])).toStrictEqual([1, 2, 3]);
    });
  });

  describe('with mapper (xorBy)', () => {
    it('compares by mapped values', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 2}, {id: 3}];

      expect(arraySymmetricDifference(firstArray, secondArray, (item) => item.id)).toStrictEqual([
        {id: 1},
        {id: 3},
      ]);
    });

    it('returns all elements when no mapped values overlap', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 3}, {id: 4}];

      expect(arraySymmetricDifference(firstArray, secondArray, (item) => item.id)).toStrictEqual([
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
      ]);
    });

    it('returns empty array when all mapped values overlap', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 1}, {id: 2}];

      expect(arraySymmetricDifference(firstArray, secondArray, (item) => item.id)).toStrictEqual(
        [],
      );
    });

    it('returns second array when first is empty', () => {
      expect(arraySymmetricDifference([], [{id: 1}], (item) => item.id)).toStrictEqual([{id: 1}]);
    });

    it('returns first array when second is empty', () => {
      expect(arraySymmetricDifference([{id: 1}], [], (item) => item.id)).toStrictEqual([{id: 1}]);
    });
  });

  describe('with comparator (xorWith)', () => {
    it('uses custom equality to compute the symmetric difference', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 2}, {id: 3}];

      expect(
        arraySymmetricDifference(firstArray, secondArray, (a, b) => a.id === b.id),
      ).toStrictEqual([{id: 1}, {id: 3}]);
    });

    it('returns all elements when no comparisons match', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 3}, {id: 4}];

      expect(
        arraySymmetricDifference(firstArray, secondArray, (a, b) => a.id === b.id),
      ).toStrictEqual([{id: 1}, {id: 2}, {id: 3}, {id: 4}]);
    });

    it('returns empty array when all elements match', () => {
      const firstArray = [{id: 1}, {id: 2}];
      const secondArray = [{id: 1}, {id: 2}];

      expect(
        arraySymmetricDifference(firstArray, secondArray, (a, b) => a.id === b.id),
      ).toStrictEqual([]);
    });

    it('returns second array when first is empty', () => {
      const empty: {id: number}[] = [];

      expect(arraySymmetricDifference(empty, [{id: 1}], (a, b) => a.id === b.id)).toStrictEqual([
        {id: 1},
      ]);
    });

    it('returns first array when second is empty', () => {
      const empty: {id: number}[] = [];

      expect(arraySymmetricDifference([{id: 1}], empty, (a, b) => a.id === b.id)).toStrictEqual([
        {id: 1},
      ]);
    });
  });
});
