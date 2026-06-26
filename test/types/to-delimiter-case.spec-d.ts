import type {ToDelimiterCase} from '../../src/types/to-delimiter-case.ts';

describe('types/ToDelimiterCase', () => {
  it('basic test', () => {
    expectTypeOf<ToDelimiterCase<'fooBar', '/'>>().toEqualTypeOf<'foo/bar'>();
  });
});
