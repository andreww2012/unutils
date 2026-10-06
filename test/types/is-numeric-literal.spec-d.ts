import type {IsNumericLiteral} from '../../src/types/is-numeric-literal.ts';

describe('types/IsNumericLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsNumericLiteral<1>>().toEqualTypeOf<true>();
  });

  it('resolves to boolean for a union of numeric literals and other types', () => {
    expectTypeOf<IsNumericLiteral<1 | string>>().toEqualTypeOf<boolean>();
  });
});
