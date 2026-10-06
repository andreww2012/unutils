import {clamp} from '../../src/math/clamp.ts';

describe('math/clamp', () => {
  it('basic test', () => {
    expect(clamp(10, 5, 15)).toBe(10);
  });

  it('clamps to the upper bound when only one bound is passed', () => {
    expect(clamp(10, 5)).toBe(5);
  });

  it('supports bigints', () => {
    expect(clamp(20n, 5n, 15n)).toBe(15n);
    expect(clamp(2n, 5n, 15n)).toBe(5n);
    expect(clamp(10n, 5n)).toBe(5n);
  });
});
