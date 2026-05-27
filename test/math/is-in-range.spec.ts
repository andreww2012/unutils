import {isInRange} from '../../src/math/is-in-range.ts';

describe('math/isInRange', () => {
  it('basic test', () => {
    expect(isInRange(3, 2, 5)).toBe(true);
  });
});
