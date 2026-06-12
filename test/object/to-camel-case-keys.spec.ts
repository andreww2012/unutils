import {toCamelCaseKeys} from '../../src/object/to-camel-case-keys.ts';

describe('object/toCamelCaseKeys', () => {
  it('basic test', () => {
    expect(toCamelCaseKeys({foo_bar: 1})).toStrictEqual({fooBar: 1});
  });
});
