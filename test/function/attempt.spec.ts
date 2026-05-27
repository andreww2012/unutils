import {attempt} from '../../src/function/attempt.ts';

describe('function/attempt', () => {
  it('basic test', () => {
    const [okError, okValue] = attempt(() => 42);

    expect(okError).toBeNull();
    expect(okValue).toBe(42);

    const error = new Error('boom');
    const [failError, failValue] = attempt(() => {
      throw error;
    });

    expect(failError).toBe(error);
    expect(failValue).toBeNull();
  });
});
