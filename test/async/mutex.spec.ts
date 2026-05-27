import {Mutex} from '../../src/async/mutex.ts';

describe('async/Mutex', () => {
  it('basic test', async () => {
    const mutex = new Mutex();
    const order: number[] = [];

    await Promise.all([
      (async () => {
        await mutex.acquire();
        order.push(1);
        mutex.release();
      })(),
      (async () => {
        await mutex.acquire();
        order.push(2);
        mutex.release();
      })(),
    ]);

    expect(order).toStrictEqual([1, 2]);
  });
});
