import {arrayToggle} from '../../src/array/array-toggle.ts';

describe('array/arrayToggle', () => {
  describe('without shouldInclude', () => {
    it('adds a missing value to the end', () => {
      expect(arrayToggle(['a', 'b'], 'c')).toStrictEqual(['a', 'b', 'c']);
    });

    it('removes every occurrence of a present value', () => {
      expect(arrayToggle(['a', 'b', 'a'], 'a')).toStrictEqual(['b']);
    });

    it('works with an empty array', () => {
      expect(arrayToggle<string>([], 'a')).toStrictEqual(['a']);
    });

    it('uses SameValueZero', () => {
      expect(arrayToggle([Number.NaN, 1], Number.NaN)).toStrictEqual([1]);
      expect(arrayToggle([0, 1], -0)).toStrictEqual([1]);
    });
  });

  describe('with shouldInclude', () => {
    it('only adds the value when shouldInclude is true', () => {
      expect(arrayToggle(['a'], 'b', true)).toStrictEqual(['a', 'b']);
      expect(arrayToggle(['a', 'b'], 'b', true)).toStrictEqual(['a', 'b']);
    });

    it('only removes the value when shouldInclude is false', () => {
      expect(arrayToggle(['a', 'b'], 'b', false)).toStrictEqual(['a']);
      expect(arrayToggle(['a'], 'b', false)).toStrictEqual(['a']);
    });
  });

  describe('mutation', () => {
    it('mutates and returns the input array by default', () => {
      const array = ['a'];

      const result = arrayToggle(array, 'b');

      expect(result).toBe(array);
      expect(array).toStrictEqual(['a', 'b']);
    });

    it('returns a new array and keeps the input untouched with copy: true', () => {
      const array = ['a', 'b'];

      const added = arrayToggle(array, 'c', undefined, {copy: true});
      const removed = arrayToggle(array, 'a', undefined, {copy: true});
      const unchanged = arrayToggle(array, 'a', true, {copy: true});

      expect(added).toStrictEqual(['a', 'b', 'c']);
      expect(removed).toStrictEqual(['b']);
      expect(unchanged).toStrictEqual(['a', 'b']);
      expect(unchanged).not.toBe(array);
      expect(array).toStrictEqual(['a', 'b']);
    });
  });
});
