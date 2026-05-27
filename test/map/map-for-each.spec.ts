import {mapForEach} from '../../src/map/map-for-each.ts';

describe('map/mapForEach', () => {
  it('basic test', () => {
    const seen: [string, number][] = [];

    mapForEach(
      new Map([
        ['a', 1],
        ['b', 2],
      ]),
      (value, key) => {
        seen.push([key, value]);
      },
    );

    expect(seen).toStrictEqual([
      ['a', 1],
      ['b', 2],
    ]);
  });
});
