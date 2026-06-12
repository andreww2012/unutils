import {mapKeys} from '../../src/object/map-keys.ts';

describe('object/mapKeys', () => {
  it('basic test', () => {
    expect(mapKeys({a: 1, b: 2}, (value, key) => `${key}!`)).toStrictEqual({'a!': 1, 'b!': 2});
  });
});
