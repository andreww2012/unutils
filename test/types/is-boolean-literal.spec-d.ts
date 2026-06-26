import type {IsBooleanLiteral} from '../../src/types/is-boolean-literal.ts';

describe('types/IsBooleanLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsBooleanLiteral<true>>().toEqualTypeOf<true>();
  });
});
