import {toKebabCaseKeys} from '../../src/object/to-kebab-case-keys.ts';

describe('object/toKebabCaseKeys', () => {
  it('kebab-cases only the top-level keys', () => {
    expect(toKebabCaseKeys({fooBar: {bazQux: 1}})).toStrictEqual({'foo-bar': {bazQux: 1}});
  });
});
