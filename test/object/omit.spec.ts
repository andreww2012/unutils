import {omit} from '../../src/object/omit.ts';

describe('object/omit', () => {
  it('omits top-level keys', () => {
    expect(omit({a: 1, b: 2, c: 3}, ['b', 'c'])).toStrictEqual({a: 1});
  });

  it('omits deep path strings', () => {
    expect(omit({a: {b: 1, c: 2}}, ['a.b'])).toStrictEqual({a: {c: 2}});
  });

  it('omits by a predicate', () => {
    expect(omit({a: 1, b: 'drop', c: 3}, (value) => typeof value === 'string')).toStrictEqual({
      a: 1,
      c: 3,
    });
  });
});
