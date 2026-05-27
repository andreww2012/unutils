import {isEmptyObject} from '../../src/predicate/is-empty-object.ts';

describe('predicate/isEmptyObject', () => {
  it('basic test', () => {
    const empty: unknown = {};
    const nonEmpty: unknown = {a: 1};
    const array: unknown = [];

    expect(isEmptyObject(empty)).toBe(true);
    expect(isEmptyObject(nonEmpty)).toBe(false);
    expect(isEmptyObject(array)).toBe(false);
  });
});
