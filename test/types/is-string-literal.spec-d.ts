import type {IsStringLiteral} from '../../src/types/is-string-literal.ts';

describe('types/IsStringLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsStringLiteral<'a'>>().toEqualTypeOf<true>();
  });
});
