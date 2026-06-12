import {mapValues} from '../../src/object/map-values.ts';

describe('object/mapValues', () => {
  it('basic test', () => {
    expect(mapValues({a: 1, b: 2}, (value) => value * 2)).toStrictEqual({a: 2, b: 4});
  });
});
