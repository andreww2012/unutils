import {createSingletonPromise} from '../../src/async/create-singleton-promise.ts';

describe('async/createSingletonPromise', () => {
  it('basic test', async () => {
    let calls = 0;
    const singleton = createSingletonPromise(() => {
      calls += 1;
      return Promise.resolve('value');
    });

    await expect(singleton()).resolves.toBe('value');

    await singleton();

    expect(calls).toBe(1);
  });
});
