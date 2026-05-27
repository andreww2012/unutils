import {noopAsync} from '../../src/function/noop-async.ts';

describe('function/noopAsync', () => {
  it('basic test', async () => {
    await expect(noopAsync()).resolves.toBeUndefined();
  });
});
