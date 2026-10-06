import {bigintMedian} from '../../src/math/bigint-median.ts';

describe('math/bigintMedian', () => {
  it('returns the middle value of an odd-length input', () => {
    expect(bigintMedian([3n, 1n, 2n])).toBe(2n);
  });

  it('rounds the average of the two middle values toward zero', () => {
    expect(bigintMedian([1n, 2n, 3n, 4n])).toBe(2n);
  });

  it('works on any iterable with a selector', () => {
    expect(bigintMedian(new Set([{size: 1n}, {size: 5n}, {size: 3n}]), (item) => item.size)).toBe(
      3n,
    );
  });

  it('throws for an empty input', () => {
    expect(() => bigintMedian([])).toThrow(RangeError);
  });
});
