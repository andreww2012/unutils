import type {IsSymbolLiteral} from '../../src/types/is-symbol-literal.ts';

describe('types/IsSymbolLiteral', () => {
  it('basic test', () => {
    expectTypeOf<IsSymbolLiteral<symbol>>().toEqualTypeOf<false>();
  });
});
