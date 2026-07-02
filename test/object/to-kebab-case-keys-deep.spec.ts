import {toKebabCaseKeysDeep} from '../../src/object/to-kebab-case-keys-deep.ts';

describe('object/toKebabCaseKeysDeep', () => {
  it('kebab-cases keys recursively', () => {
    expect(toKebabCaseKeysDeep({fooBar: {bazQux: 1}})).toStrictEqual({
      'foo-bar': {'baz-qux': 1},
    });
  });
});
