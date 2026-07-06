import {mapMapKeys} from '../../src/map/map-map-keys.ts';

describe('map/mapMapKeys', () => {
  it('basic test', () => {
    const result = mapMapKeys(
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
      (_value, key) => key.toUpperCase(),
    );

    expect([...result]).toStrictEqual([
      ['A', 1],
      ['B', 2],
    ]);
  });
});
