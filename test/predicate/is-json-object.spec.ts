import {isJsonObject} from '../../src/predicate/is-json-object.ts';

describe('predicate/isJsonObject', () => {
  it('basic test', () => {
    const object: unknown = {a: 1};

    expect(isJsonObject(object)).toBe(true);
    expect(isJsonObject(123)).toBe(false);
  });
});
