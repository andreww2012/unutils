import {setByPath} from '../../src/object/set-by-path.ts';

describe('object/setByPath', () => {
  it('sets a value, creating intermediate containers, and mutates the input', () => {
    const object = {};
    const result = setByPath(object, 'a.b.c', 1);

    expect(result).toBe(object);
    expect(result).toStrictEqual({a: {b: {c: 1}}});
  });

  it('creates arrays for numeric segments by default', () => {
    expect(setByPath({}, 'a[0].b', 1)).toStrictEqual({a: [{b: 1}]});
  });

  it('uses the customizer to create containers', () => {
    expect(setByPath({}, 'a[0].b', 1, () => ({}))).toStrictEqual({a: {0: {b: 1}}});
  });
});
