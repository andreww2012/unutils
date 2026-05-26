import {withConcurrencyLimit} from '../../src/function/with-concurrency-limit.ts';

describe('function/withConcurrencyLimit', () => {
  it('basic test', async () => {
    let active = 0;
    let maxActive = 0;

    const limited = withConcurrencyLimit(async (value: number) => {
      active++;
      maxActive = Math.max(maxActive, active);
      await Promise.resolve();
      active--;
      return value * 2;
    }, 2);

    const results = await Promise.all([1, 2, 3, 4, 5].map((value) => limited(value)));

    expect(results).toStrictEqual([2, 4, 6, 8, 10]);
    expect(maxActive).toBeLessThanOrEqual(2);
  });
});
