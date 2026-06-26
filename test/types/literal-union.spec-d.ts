import type {LiteralUnion} from '../../src/types/literal-union.ts';

describe('types/LiteralUnion', () => {
  it('basic test', () => {
    expectTypeOf<
      LiteralUnion<'a' | 'b', string> extends string ? true : false
    >().toEqualTypeOf<true>();
  });
});
