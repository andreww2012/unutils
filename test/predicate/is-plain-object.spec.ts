import {isPlainObject} from '../../src/predicate/is-plain-object.ts';

describe('predicate/isPlainObject', () => {
  it('basic test', () => {
    const empty: unknown = {};
    const object: unknown = {a: 1};
    const array: unknown = [];
    const date: unknown = new Date();

    expect(isPlainObject(empty)).toBe(true);
    expect(isPlainObject(object)).toBe(true);
    expect(isPlainObject(array)).toBe(false);
    expect(isPlainObject(date)).toBe(false);
  });
});
