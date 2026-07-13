import {objectAssign} from '../../src/object/object-assign.ts';

describe('object/objectAssign', () => {
  it('copies source properties onto the target and returns it', () => {
    const target = {a: 1};
    const result = objectAssign(target, {b: 2});

    expect(result).toStrictEqual({a: 1, b: 2});
    expect(result).toBe(target);
  });

  it('applies sources left to right, later ones overriding', () => {
    expect(objectAssign({a: 1}, {a: 2}, {a: 3})).toStrictEqual({a: 3});
  });
});
