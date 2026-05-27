import {sleep} from '../../src/async/sleep.ts';

describe('async/sleep', () => {
  it('basic test', async () => {
    const start = Date.now();
    await sleep(20);

    expect(Date.now() - start).toBeGreaterThanOrEqual(15);
  });
});
