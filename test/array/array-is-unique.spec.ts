import {arrayIsUnique} from '../../src/array/array-is-unique.ts';

const isSameLetter = (a: string, b: string) => a.toLowerCase() === b.toLowerCase();

describe('array/arrayIsUnique', () => {
  describe('basic equality (no second argument)', () => {
    it('returns true when all elements are unique', () => {
      expect(arrayIsUnique([1, 2, 3])).toBe(true);
    });

    it('returns false when some element repeats', () => {
      expect(arrayIsUnique([1, 2, 1])).toBe(false);
    });

    it('returns true for an empty array', () => {
      expect(arrayIsUnique([])).toBe(true);
    });

    it('uses SameValueZero', () => {
      expect(arrayIsUnique([Number.NaN, Number.NaN])).toBe(false);
      expect(arrayIsUnique([0, -0])).toBe(false);
    });
  });

  describe('with mapper', () => {
    it('checks the uniqueness of the derived keys', () => {
      expect(arrayIsUnique([{id: 1}, {id: 2}], (item) => item.id)).toBe(true);
      expect(arrayIsUnique([{id: 1}, {id: 2}, {id: 1}], (item) => item.id)).toBe(false);
    });

    it('stops at the first repeat', () => {
      const mapper = vi.fn<(value: number) => number>((value) => value);

      arrayIsUnique([1, 1, 2, 3], mapper);

      expect(mapper).toHaveBeenCalledTimes(2);
    });
  });

  describe('with comparator', () => {
    it('uses the comparator to compare elements', () => {
      expect(arrayIsUnique(['a', 'b'], isSameLetter)).toBe(true);
      expect(arrayIsUnique(['a', 'A'], isSameLetter)).toBe(false);
    });
  });

  describe('as a callback', () => {
    it('ignores the index passed by array methods', () => {
      expect(
        [
          [1, 2],
          [3, 3],
          [4, 5],
        ].filter(arrayIsUnique),
      ).toStrictEqual([
        [1, 2],
        [4, 5],
      ]);
    });
  });
});
