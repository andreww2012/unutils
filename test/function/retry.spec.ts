import {retry} from '../../src/function/retry.ts';

describe('function/retry', () => {
  it('basic test', async () => {
    let attempts = 0;
    const flaky = () => {
      attempts++;
      return attempts < 3 ? Promise.reject(new Error('flaky')) : Promise.resolve('ok');
    };

    await expect(retry(flaky, {retries: 5, delay: 0})).resolves.toBe('ok');
    expect(attempts).toBe(3);
  });
});
