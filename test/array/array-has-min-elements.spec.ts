import {arrayHasMinElements} from '../../src/array/array-has-min-elements.ts';

describe('array/arrayHasMinElements', () => {
  it('returns true when the array has at least the given number of elements', () => {
    expect(arrayHasMinElements([1, 2, 3], 2)).toBe(true);
  });

  it('returns true when the length exactly equals the minimum', () => {
    expect(arrayHasMinElements([1, 2], 2)).toBe(true);
  });

  it('returns false when the array has fewer elements', () => {
    expect(arrayHasMinElements([1], 2)).toBe(false);
  });

  it('works with a non-literal minimum (boolean result)', () => {
    const minimum = Math.min(2, 3); // non-literal `number`

    expect(arrayHasMinElements([1, 2, 3], minimum)).toBe(true);
  });
});
