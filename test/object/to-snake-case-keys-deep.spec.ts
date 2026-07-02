import {toSnakeCaseKeysDeep} from '../../src/object/to-snake-case-keys-deep.ts';

describe('object/toSnakeCaseKeysDeep', () => {
  it('snake-cases keys recursively', () => {
    expect(toSnakeCaseKeysDeep({fooBar: {bazQux: [{aB: 1}]}})).toStrictEqual({
      foo_bar: {baz_qux: [{a_b: 1}]},
    });
  });
});
