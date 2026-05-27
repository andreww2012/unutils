import {withConcurrencyLimit} from '../../src/async/with-concurrency-limit.ts';

describe('async/withConcurrencyLimit', () => {
  it('basic test', async () => {
    const limited = withConcurrencyLimit((value: number) => Promise.resolve(value * 2), 2);
    const result = await Promise.all([1, 2, 3, 4].map((value) => limited(value)));

    expect(result).toStrictEqual([2, 4, 6, 8]);
  });
});
