import {forEachRight} from '../../src/array/for-each-right.ts';

describe('array/forEachRight', () => {
  it('basic test', () => {
    const seen: number[] = [];

    forEachRight([1, 2, 3], (item) => {
      seen.push(item);
    });

    expect(seen).toStrictEqual([3, 2, 1]);
  });
});
