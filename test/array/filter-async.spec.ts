import {filterAsync} from '../../src/array/filter-async.ts';

describe('array/filterAsync', () => {
  it('basic test', async () => {
    await expect(
      filterAsync([1, 2, 3, 4], (item) => Promise.resolve(item % 2 === 0)),
    ).resolves.toStrictEqual([2, 4]);
  });
});
