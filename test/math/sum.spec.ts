import {sum} from '../../src/math/sum.ts';

const naturals = function* () {
  yield 1;
  yield 2;
  yield 3;
};

describe('math/sum', () => {
  describe('without a selector', () => {
    it('returns the sum of a number array', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    it('returns 0 for an empty array', () => {
      expect(sum([])).toBe(0);
    });

    it('handles negative numbers', () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });

    it('works on any iterable (Set)', () => {
      expect(sum(new Set([1, 2, 3]))).toBe(6);
    });

    it('works on a lazy generator', () => {
      expect(sum(naturals())).toBe(6);
    });
  });

  describe('with a selector', () => {
    it('sums values produced by the selector', () => {
      expect(sum([{a: 1}, {a: 2}, {a: 3}], (item) => item.a)).toBe(6);
    });

    it('passes the zero-based index to the selector', () => {
      expect(sum([{a: 1}, {a: 2}, {a: 3}], (item, index) => item.a * index)).toBe(8);
    });

    it('returns 0 for an empty array', () => {
      expect(sum([] as {a: number}[], (item) => item.a)).toBe(0);
    });
  });
});
