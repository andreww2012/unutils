import {mapAsync} from '../../src/array/map-async.ts';

describe('array/mapAsync', () => {
  it('basic test', async () => {
    await expect(
      mapAsync([1, 2, 3, 4], (item) => Promise.resolve(item * 2)),
    ).resolves.toStrictEqual([2, 4, 6, 8]);
  });
});
