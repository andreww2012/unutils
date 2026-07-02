import {toDelimiterCaseKeys} from '../../src/object/to-delimiter-case-keys.ts';

describe('object/toDelimiterCaseKeys', () => {
  it('delimiter-cases only the top-level keys, preserving case', () => {
    expect(toDelimiterCaseKeys({fooBar: {bazQux: 1}}, '.')).toStrictEqual({
      'foo.Bar': {bazQux: 1},
    });
  });
});
