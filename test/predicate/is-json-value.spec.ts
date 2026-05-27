import {isJsonValue} from '../../src/predicate/is-json-value.ts';

describe('predicate/isJsonValue', () => {
  it('basic test', () => {
    const object: unknown = {a: 1};
    const array: unknown = [1, 2];

    expect(isJsonValue(object)).toBe(true);
    expect(isJsonValue(array)).toBe(true);
    expect(isJsonValue(undefined)).toBe(false);
  });
});
