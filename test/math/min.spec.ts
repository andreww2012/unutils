import {min} from '../../src/math/min.ts';

const values = function* () {
  yield 2;
  yield 9;
  yield 5;
};

describe('math/min', () => {
  it('returns the smallest number in an array', () => {
    expect(min([3, 1, 4, 1, 5])).toBe(1);
  });

  it('handles negative numbers', () => {
    expect(min([-3, -1, -4])).toBe(-4);
  });

  it('returns the only element of a single-element input', () => {
    expect(min([42])).toBe(42);
  });

  it('returns `undefined` for an empty input', () => {
    expect(min([])).toBeUndefined();
  });

  it('works on any iterable (Set)', () => {
    expect(min(new Set([10, 30, 20]))).toBe(10);
  });

  it('works on a lazy generator', () => {
    expect(min(values())).toBe(2);
  });
});
