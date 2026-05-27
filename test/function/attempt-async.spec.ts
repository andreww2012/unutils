import {attemptAsync} from '../../src/function/attempt-async.ts';

describe('function/attemptAsync', () => {
  it('basic test', async () => {
    const [okError, okValue] = await attemptAsync(() => Promise.resolve(42));

    expect(okError).toBeNull();
    expect(okValue).toBe(42);

    const error = new Error('boom');
    const [failError, failValue] = await attemptAsync(() => Promise.reject(error));

    expect(failError).toBe(error);
    expect(failValue).toBeNull();
  });
});
