import {arrayHasMaxElements} from '../../src/array/array-has-max-elements.ts';

describe('array/arrayHasMaxElements', () => {
  it('returns true when the array has fewer elements than the maximum', () => {
    expect(arrayHasMaxElements([1], 2)).toBe(true);
  });

  it('returns true when the length exactly equals the maximum', () => {
    expect(arrayHasMaxElements([1, 2], 2)).toBe(true);
  });

  it('returns false when the array has more elements', () => {
    expect(arrayHasMaxElements([1, 2, 3], 2)).toBe(false);
  });

  it('returns true for an empty array', () => {
    expect(arrayHasMaxElements([], 0)).toBe(true);
  });

  it('works with a non-literal maximum (boolean result)', () => {
    const maximum = Math.max(2, 3); // non-literal `number`

    expect(arrayHasMaxElements([1, 2, 3], maximum)).toBe(true);
  });

  it('does not mutate the array', () => {
    const values = [1, 2, 3];

    arrayHasMaxElements(values, 2);

    expect(values).toStrictEqual([1, 2, 3]);
  });
});
