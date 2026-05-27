import {Semaphore} from '../../src/async/semaphore.ts';

describe('async/Semaphore', () => {
  it('basic test', async () => {
    const semaphore = new Semaphore(2);
    const order: number[] = [];

    await Promise.all(
      [1, 2, 3].map(async (value) => {
        await semaphore.acquire();
        order.push(value);
        semaphore.release();
      }),
    );

    expect(order).toHaveLength(3);
  });
});
