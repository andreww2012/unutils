import type {StringSlice} from '../../src/types/string-slice.ts';

describe('types/StringSlice', () => {
  it('basic test', () => {
    expectTypeOf<StringSlice<'hello', 0, 2>>().toEqualTypeOf<'he'>();
  });
});
