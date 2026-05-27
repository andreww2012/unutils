import {retry} from '../../src/function/retry.ts';

describe('function/retry', () => {
  it('basic test', async () => {
    let attempts = 0;
    const flaky = () => {
      attempts++;
      if (attempts < 3) {
        return Promise.reject(new Error('flaky'));
      }
      return Promise.resolve('ok');
    };

    await expect(retry(flaky, {retries: 5, delay: 0})).resolves.toBe('ok');
    expect(attempts).toBe(3);
  });
});
