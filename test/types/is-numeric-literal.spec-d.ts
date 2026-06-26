import type {IsNumericLiteral} from '../../src/types/is-numeric-literal.ts';

describe('types/IsNumericLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsNumericLiteral<1>>().toEqualTypeOf<true>();
  });
});
