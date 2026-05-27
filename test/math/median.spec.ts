import {median} from '../../src/math/median.ts';

describe('math/median', () => {
  describe('without a selector', () => {
    it('returns the middle value for an odd-length number array', () => {
      expect(median([1, 2, 3, 4, 5])).toBe(3);
    });

    it('returns the average of the two middle values for an even-length array', () => {
      expect(median([1, 2, 3, 4])).toBe(2.5);
    });

    it('does not depend on the input order', () => {
      expect(median([5, 1, 4, 2, 3])).toBe(3);
    });

    it('returns NaN for an empty array', () => {
      expect(median([])).toBeNaN();
    });
  });

  describe('with a selector', () => {
    it('uses the selector for an odd-length array', () => {
      expect(median([{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}], (item) => item.a)).toBe(3);
    });

    it('uses the selector for an even-length array', () => {
      expect(median([{a: 1}, {a: 2}, {a: 3}, {a: 4}], (item) => item.a)).toBe(2.5);
    });

    it('returns NaN for an empty array', () => {
      expect(median([] as {a: number}[], (item) => item.a)).toBeNaN();
    });
  });
});
