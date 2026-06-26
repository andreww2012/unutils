import type {IsLiteral} from '../../src/types/is-literal.ts';

describe('types/IsLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsLiteral<'a'>>().toEqualTypeOf<true>();
  });
});
