import {replaceKeys} from '../../src/object/replace-keys.ts';

describe('object/replaceKeys', () => {
  it('replaces a substring in the top-level keys only', () => {
    expect(replaceKeys({foo_bar: {foo_baz: 1}}, 'foo_', 'x_')).toStrictEqual({
      x_bar: {foo_baz: 1},
    });
  });
});
