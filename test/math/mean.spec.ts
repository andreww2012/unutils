import {mean} from '../../src/math/mean.ts';

describe('math/mean', () => {
  describe('without a selector', () => {
    it('returns the arithmetic mean of a number array', () => {
      expect(mean([1, 2, 3, 4, 5])).toBe(3);
    });

    it('handles a single-element array', () => {
      expect(mean([7])).toBe(7);
    });

    it('handles negative numbers', () => {
      expect(mean([-2, -4, -6])).toBe(-4);
    });

    it('returns NaN for an empty array', () => {
      expect(mean([])).toBeNaN();
    });

    it('works on any iterable (Set)', () => {
      expect(mean(new Set([1, 2, 3]))).toBe(2);
    });
  });

  describe('with a selector', () => {
    it('averages values produced by the selector', () => {
      expect(mean([{a: 1}, {a: 2}, {a: 3}], (item) => item.a)).toBe(2);
    });

    it('returns NaN for an empty array', () => {
      expect(mean([] as {a: number}[], (item) => item.a)).toBeNaN();
    });

    it('works with string elements that are mapped to numbers', () => {
      expect(mean(['1', '2', '3'], Number)).toBe(2);
    });
  });
});
