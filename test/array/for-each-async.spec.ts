import {forEachAsync} from '../../src/array/for-each-async.ts';

describe('array/forEachAsync', () => {
  it('basic test', async () => {
    const seen: number[] = [];

    await forEachAsync([1, 2, 3], (item) => {
      seen.push(item);
      return Promise.resolve();
    });

    expect(seen).toStrictEqual([1, 2, 3]);
  });
});
