import {setFilter} from '../../src/set/set-filter.ts';

describe('set/setFilter', () => {
  it('basic test', () => {
    const result = setFilter(new Set([1, 2, 3, 4]), (value) => value % 2 === 0);

    expect([...result]).toStrictEqual([2, 4]);
  });
});
