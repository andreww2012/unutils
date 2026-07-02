import {toPascalCaseKeys} from '../../src/object/to-pascal-case-keys.ts';

describe('object/toPascalCaseKeys', () => {
  it('converts only the top-level keys to PascalCase', () => {
    expect(toPascalCaseKeys({foo_bar: {baz_qux: 1}})).toStrictEqual({FooBar: {baz_qux: 1}});
  });
});
