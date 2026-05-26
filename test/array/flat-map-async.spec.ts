import {flatMapAsync} from '../../src/array/flat-map-async.ts';

describe('array/flatMapAsync', () => {
  it('basic test', async () => {
    await expect(
      flatMapAsync([1, 2, 3], (item) => Promise.resolve([item, item * 10])),
    ).resolves.toStrictEqual([1, 10, 2, 20, 3, 30]);
  });
});
