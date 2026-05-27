import {clamp} from '../../src/math/clamp.ts';

describe('math/clamp', () => {
  it('basic test', () => {
    expect(clamp(10, 5, 15)).toBe(10);
  });
});
