import {toPascalCaseKeysDeep} from '../../src/object/to-pascal-case-keys-deep.ts';

describe('object/toPascalCaseKeysDeep', () => {
  it('converts keys to PascalCase recursively', () => {
    expect(toPascalCaseKeysDeep({foo_bar: {baz_qux: 1}})).toStrictEqual({
      FooBar: {BazQux: 1},
    });
  });
});
