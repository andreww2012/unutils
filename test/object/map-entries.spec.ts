import {mapEntries} from '../../src/object/map-entries.ts';

describe('object/mapEntries', () => {
  it('basic test', () => {
    expect(mapEntries({a: 1, b: 2}, (key, value) => [key.toUpperCase(), value * 2])).toStrictEqual({
      A: 2,
      B: 4,
    });
  });
});
