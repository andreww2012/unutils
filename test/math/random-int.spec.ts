import {randomInt} from '../../src/math/random-int.ts';

describe('math/randomInt', () => {
  it('basic test', () => {
    const result = randomInt(0, 5);

    expect(Number.isInteger(result)).toBe(true);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(5);
  });
});
