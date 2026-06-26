import type {ToDelimiterCaseKeys} from '../../src/types/to-delimiter-case-keys.ts';

describe('types/ToDelimiterCaseKeys', () => {
  it('basic test', () => {
    expectTypeOf<ToDelimiterCaseKeys<{fooBar: 1}, '/'>>().toEqualTypeOf<{'foo/bar': 1}>();
  });
});
