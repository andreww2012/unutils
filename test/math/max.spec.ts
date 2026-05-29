import {max} from '../../src/math/max.ts';

const values = function* () {
  yield 2;
  yield 9;
  yield 5;
};

describe('math/max', () => {
  it('returns the largest number in an array', () => {
    expect(max([3, 1, 4, 1, 5])).toBe(5);
  });

  it('handles negative numbers', () => {
    expect(max([-3, -1, -4])).toBe(-1);
  });

  it('returns the only element of a single-element input', () => {
    expect(max([42])).toBe(42);
  });

  it('returns `undefined` for an empty input', () => {
    expect(max([])).toBeUndefined();
  });

  it('works on any iterable (Set)', () => {
    expect(max(new Set([10, 30, 20]))).toBe(30);
  });

  it('works on a lazy generator', () => {
    expect(max(values())).toBe(9);
  });

  it('does not overflow on large inputs where the spread form would', () => {
    const large = Array.from({length: 200_000}, (_, index) => index);

    expect(max(large)).toBe(199_999);
  });
});
