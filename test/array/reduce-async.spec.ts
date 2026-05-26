import {reduceAsync} from '../../src/array/reduce-async.ts';

describe('array/reduceAsync', () => {
  it('basic test', async () => {
    await expect(
      reduceAsync([1, 2, 3, 4], (accumulator, item) => Promise.resolve(accumulator + item), 0),
    ).resolves.toBe(10);
  });
});
