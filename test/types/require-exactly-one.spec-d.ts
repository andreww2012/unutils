import type {RequireExactlyOne} from '../../src/types/require-exactly-one.ts';

describe('types/RequireExactlyOne', () => {
  it('basic test', () => {
    expectTypeOf<
      {a: 1} extends RequireExactlyOne<{a?: 1; b?: 2}> ? true : false
    >().toEqualTypeOf<true>();
    expectTypeOf<
      {a: 1; b: 2} extends RequireExactlyOne<{a?: 1; b?: 2}> ? true : false
    >().toEqualTypeOf<false>();
  });
});
