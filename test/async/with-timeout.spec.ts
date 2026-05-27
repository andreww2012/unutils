import {withTimeout} from '../../src/async/with-timeout.ts';

describe('async/withTimeout', () => {
  it('basic test', async () => {
    await expect(withTimeout(() => Promise.resolve(42), 50)).resolves.toBe(42);
    await expect(
      withTimeout(
        () =>
          new Promise<number>(() => {
            // never resolves
          }),
        10,
      ),
    ).rejects.toThrow();
  });
});
