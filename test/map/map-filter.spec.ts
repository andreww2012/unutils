import {mapFilter} from '../../src/map/map-filter.ts';

describe('map/mapFilter', () => {
  it('basic test', () => {
    const sample = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);
    const result = mapFilter(sample, (value) => value > 1);

    expect([...result.entries()]).toStrictEqual([
      ['b', 2],
      ['c', 3],
    ]);
  });
});
