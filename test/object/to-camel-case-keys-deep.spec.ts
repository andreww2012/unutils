import {toCamelCaseKeysDeep} from '../../src/object/to-camel-case-keys-deep.ts';

describe('object/toCamelCaseKeysDeep', () => {
  it('camel-cases keys recursively', () => {
    expect(toCamelCaseKeysDeep({foo_bar: {baz_qux: [{a_b: 1}]}})).toStrictEqual({
      fooBar: {bazQux: [{aB: 1}]},
    });
  });
});
