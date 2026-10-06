import type {IsLiteral} from '../../src/types/is-literal.ts';

describe('types/IsLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsLiteral<'a'>>().toEqualTypeOf<true>();
  });

  it('resolves to boolean for a union of literals and non-literals', () => {
    expectTypeOf<IsLiteral<'a' | number>>().toEqualTypeOf<boolean>();
  });
});
