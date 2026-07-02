import {toDelimiterCaseKeysDeep} from '../../src/object/to-delimiter-case-keys-deep.ts';

describe('object/toDelimiterCaseKeysDeep', () => {
  it('delimiter-cases keys recursively, preserving case', () => {
    expect(toDelimiterCaseKeysDeep({fooBar: {bazQux: 1}}, '.')).toStrictEqual({
      'foo.Bar': {'baz.Qux': 1},
    });
  });
});
