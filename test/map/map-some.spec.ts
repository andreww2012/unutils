import {mapSome} from '../../src/map/map-some.ts';

describe('map/mapSome', () => {
  it('basic test', () => {
    const sample = new Map([
      ['a', 1],
      ['b', 2],
    ]);

    expect(mapSome(sample, (value) => value === 2)).toBe(true);
    expect(mapSome(sample, (value) => value > 10)).toBe(false);
  });
});
