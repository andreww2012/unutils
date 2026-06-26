import type {OrExclusive} from '../../src/types/or-exclusive.ts';

describe('types/OrExclusive', () => {
  it('basic test', () => {
    expectTypeOf<OrExclusive<true, false>>().toEqualTypeOf<true>();
    expectTypeOf<OrExclusive<true, true>>().toEqualTypeOf<false>();
  });
});
