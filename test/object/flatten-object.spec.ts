import {flattenObject} from '../../src/object/flatten-object.ts';

describe('object/flattenObject', () => {
  it('basic test', () => {
    expect(flattenObject({a: {b: {c: 1}}, d: 2})).toStrictEqual({'a.b.c': 1, d: 2});
  });
});
