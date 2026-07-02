import {toCamelCaseKeys} from '../../src/object/to-camel-case-keys.ts';

describe('object/toCamelCaseKeys', () => {
  it('camel-cases only the top-level keys', () => {
    expect(toCamelCaseKeys({foo_bar: {baz_qux: 1}})).toStrictEqual({fooBar: {baz_qux: 1}});
  });
});
