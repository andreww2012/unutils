import {isInRange} from '../../src/math/is-in-range.ts';

describe('math/isInRange', () => {
  it('basic test', () => {
    expect(isInRange(3, 2, 5)).toBe(true);
  });

  it('supports bigints', () => {
    expect(isInRange(3n, 2n, 5n)).toBe(true);
    expect(isInRange(5n, 2n, 5n)).toBe(false);
    expect(isInRange(3n, 5n)).toBe(true);
  });
});
