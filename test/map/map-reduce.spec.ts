import {mapReduce} from '../../src/map/map-reduce.ts';

describe('map/mapReduce', () => {
  it('basic test', () => {
    const sample = new Map([
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]);

    expect(mapReduce(sample, (acc, value) => acc + value, 0)).toBe(6);
  });
});
