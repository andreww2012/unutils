import {setByPathImmutable} from '../../src/object/set-by-path-immutable.ts';

describe('object/setByPathImmutable', () => {
  it('replaces the value at a deep path', () => {
    expect(setByPathImmutable({a: {b: 1}}, ['a', 'b'], 2)).toStrictEqual({a: {b: 2}});
  });

  it('does not mutate the input', () => {
    const source = {a: {b: 1}};
    const result = setByPathImmutable(source, ['a', 'b'], 2);

    expect(source).toStrictEqual({a: {b: 1}});
    expect(result).not.toBe(source);
  });
});
