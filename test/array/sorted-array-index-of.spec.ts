import {sortedArrayIndexOf} from '../../src/array/sorted-array-index-of.ts';

describe('array/sortedArrayIndexOf', () => {
  describe('first match (the default)', () => {
    it('returns the first index of the value', () => {
      expect(sortedArrayIndexOf([10, 20, 30, 30, 40], 30)).toBe(2);
    });

    it('returns the index of a unique value', () => {
      expect(sortedArrayIndexOf([10, 20, 30], 20)).toBe(1);
    });

    it('returns -1 when the value is absent', () => {
      expect(sortedArrayIndexOf([10, 20, 40], 30)).toBe(-1);
    });

    it('returns -1 for an empty array', () => {
      expect(sortedArrayIndexOf([], 1)).toBe(-1);
    });

    it('returns -1 for a value smaller than every element', () => {
      expect(sortedArrayIndexOf([10, 20, 30], 5)).toBe(-1);
    });

    it('returns -1 for a value larger than every element', () => {
      expect(sortedArrayIndexOf([10, 20, 30], 40)).toBe(-1);
    });

    it('locates strings', () => {
      expect(sortedArrayIndexOf(['a', 'c', 'e'], 'c')).toBe(1);
    });
  });

  describe('rightmost', () => {
    it('returns the last index of the value', () => {
      expect(sortedArrayIndexOf([10, 20, 30, 30, 40], 30, {rightmost: true})).toBe(3);
    });

    it('returns -1 when the value is absent', () => {
      expect(sortedArrayIndexOf([10, 20, 40], 30, {rightmost: true})).toBe(-1);
    });

    it('returns -1 for an empty array', () => {
      expect(sortedArrayIndexOf([], 1, {rightmost: true})).toBe(-1);
    });
  });
});
