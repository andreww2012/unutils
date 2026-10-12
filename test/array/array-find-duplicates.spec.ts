import {arrayFindDuplicates} from '../../src/array/array-find-duplicates.ts';

describe('array/arrayFindDuplicates', () => {
  describe('basic equality (no second argument)', () => {
    it('reports each repeated value once, in the order the repeats are found', () => {
      expect(arrayFindDuplicates([1, 2, 1, 3, 2, 1])).toStrictEqual([1, 2]);
      expect(arrayFindDuplicates([3, 1, 1, 3])).toStrictEqual([1, 3]);
    });

    it('returns an empty array when all elements are unique', () => {
      expect(arrayFindDuplicates([1, 2, 3])).toStrictEqual([]);
    });

    it('returns an empty array for an empty input', () => {
      expect(arrayFindDuplicates([])).toStrictEqual([]);
    });

    it('uses SameValueZero', () => {
      expect(arrayFindDuplicates([Number.NaN, Number.NaN, 0, -0])).toStrictEqual([Number.NaN, -0]);
    });

    it('compares objects by reference', () => {
      const object = {id: 1};

      expect(arrayFindDuplicates([object, {id: 1}, object])).toStrictEqual([object]);
    });
  });

  describe('with mapper', () => {
    it('reports the second occurrence of each repeated key', () => {
      const array = [
        {id: 1, value: 'a'},
        {id: 2, value: 'b'},
        {id: 1, value: 'c'},
        {id: 1, value: 'd'},
      ];

      expect(arrayFindDuplicates(array, (item) => item.id)).toStrictEqual([{id: 1, value: 'c'}]);
    });

    it('returns an empty array when all keys are unique', () => {
      expect(arrayFindDuplicates([{id: 1}, {id: 2}], (item) => item.id)).toStrictEqual([]);
    });
  });

  describe('with comparator', () => {
    it('reports the second occurrence of each repeated value', () => {
      expect(
        arrayFindDuplicates(
          ['a', 'B', 'b', 'A', 'a'],
          (a, b) => a.toLowerCase() === b.toLowerCase(),
        ),
      ).toStrictEqual(['b', 'A']);
    });

    it('relies on the comparator only, even for equal values', () => {
      expect(arrayFindDuplicates([1, 1], (a, b) => a > b)).toStrictEqual([]);
    });

    it('passes an earlier element first', () => {
      const calls: [number, number][] = [];

      arrayFindDuplicates([1, 2], (a, b) => {
        calls.push([a, b]);
        return false;
      });

      expect(calls).toStrictEqual([[1, 2]]);
    });
  });

  describe('limit', () => {
    it('stops once enough duplicates are found', () => {
      expect(arrayFindDuplicates([1, 1, 2, 2, 3, 3], {limit: 2})).toStrictEqual([1, 2]);
    });

    it('works together with a mapper', () => {
      const mapper = vi.fn<(value: number) => number>((value) => value % 10);

      expect(arrayFindDuplicates([1, 11, 2, 12, 3], mapper, {limit: 1})).toStrictEqual([11]);
      expect(mapper).toHaveBeenCalledTimes(2);
    });

    it('works together with a comparator', () => {
      expect(
        arrayFindDuplicates([1, 11, 2, 12], (a, b) => a % 10 === b % 10, {limit: 1}),
      ).toStrictEqual([11]);
    });

    it('returns an empty array for a non-positive limit', () => {
      expect(arrayFindDuplicates([1, 1], {limit: 0})).toStrictEqual([]);
    });
  });

  it('does not mutate the input', () => {
    const array = [1, 1, 2];

    arrayFindDuplicates(array);

    expect(array).toStrictEqual([1, 1, 2]);
  });
});
