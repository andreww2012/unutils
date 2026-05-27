import {mapEvery} from '../../src/map/map-every.ts';

describe('map/mapEvery', () => {
  it('basic test', () => {
    const sample = new Map([
      ['a', 2],
      ['b', 4],
    ]);

    expect(mapEvery(sample, (value) => value % 2 === 0)).toBe(true);
    expect(mapEvery(sample, (value) => value > 2)).toBe(false);
  });
});
