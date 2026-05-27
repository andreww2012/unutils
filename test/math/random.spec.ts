import {random} from '../../src/math/random.ts';

describe('math/random', () => {
  it('basic test', () => {
    const result = random(0, 5);

    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(5);
  });
});
