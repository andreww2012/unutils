import {mapMapValues} from '../../src/map/map-map-values.ts';

describe('map/mapMapValues', () => {
  it('basic test', () => {
    const result = mapMapValues(
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
      (value) => value * 10,
    );

    expect([...result.entries()]).toStrictEqual([
      ['a', 10],
      ['b', 20],
    ]);
  });
});
