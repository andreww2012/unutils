import {bigintSum} from '../../src/math/bigint-sum.ts';

describe('math/bigintSum', () => {
  it('sums bigints', () => {
    expect(bigintSum([1n, 2n, 3n])).toBe(6n);
  });

  it('returns `0n` for an empty input', () => {
    expect(bigintSum([])).toBe(0n);
  });

  it('works on any iterable', () => {
    expect(bigintSum(new Set([1n, 2n]))).toBe(3n);
  });

  it('sums the selected values and passes the position', () => {
    expect(
      bigintSum([{size: 1n}, {size: 2n}], (item, index) => item.size * BigInt(index + 1)),
    ).toBe(5n);
  });
});
