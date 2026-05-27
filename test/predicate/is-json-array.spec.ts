import {isJsonArray} from '../../src/predicate/is-json-array.ts';

describe('predicate/isJsonArray', () => {
  it('basic test', () => {
    const array: unknown = [1, 2, 3];

    expect(isJsonArray(array)).toBe(true);
    expect(isJsonArray('not an array')).toBe(false);
  });
});
