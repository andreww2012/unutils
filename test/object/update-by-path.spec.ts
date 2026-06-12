import {updateByPath} from '../../src/object/update-by-path.ts';

describe('object/updateByPath', () => {
  it('applies the updater and mutates the input', () => {
    const object = {a: {b: 1}};
    const result = updateByPath(object, 'a.b', (value) => Number(value) + 1);

    expect(result).toBe(object);
    expect(result).toStrictEqual({a: {b: 2}});
  });

  it('creates intermediate containers', () => {
    expect(updateByPath({}, 'a.b.c', () => 1)).toStrictEqual({a: {b: {c: 1}}});
  });

  it('uses the customizer to create containers', () => {
    expect(
      updateByPath(
        {},
        'a[0].b',
        () => 1,
        () => ({}),
      ),
    ).toStrictEqual({a: {0: {b: 1}}});
  });
});
