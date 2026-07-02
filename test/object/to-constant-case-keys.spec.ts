import {toConstantCaseKeys} from '../../src/object/to-constant-case-keys.ts';

describe('object/toConstantCaseKeys', () => {
  it('constant-cases only the top-level keys', () => {
    expect(toConstantCaseKeys({fooBar: {bazQux: 1}})).toStrictEqual({FOO_BAR: {bazQux: 1}});
  });
});
