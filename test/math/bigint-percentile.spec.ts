import {bigintPercentile} from '../../src/math/bigint-percentile.ts';

describe('math/bigintPercentile', () => {
  it('returns the bigint at the given percentile', () => {
    expect(bigintPercentile([1n, 2n, 3n, 4n, 5n], 50)).toBe(3n);
    expect(bigintPercentile([1n, 2n, 3n, 4n, 5n], 90)).toBe(5n);
  });
});
