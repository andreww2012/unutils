import {percentile} from '../../src/math/percentile.ts';

describe('math/percentile', () => {
  it('basic test', () => {
    expect(percentile([1, 2, 3, 4, 5], 50)).toBe(3);
  });
});
