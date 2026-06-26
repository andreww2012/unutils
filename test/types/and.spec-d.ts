import type {And} from '../../src/types/and.ts';

describe('types/And', () => {
  it('basic test', () => {
    expectTypeOf<And<true, true>>().toEqualTypeOf<true>();
    expectTypeOf<And<true, false>>().toEqualTypeOf<false>();
  });
});
