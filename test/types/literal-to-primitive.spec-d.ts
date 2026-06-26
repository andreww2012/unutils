import type {LiteralToPrimitive} from '../../src/types/literal-to-primitive.ts';

describe('types/LiteralToPrimitive', () => {
  it('basic test', () => {
    expectTypeOf<LiteralToPrimitive<'a'>>().toEqualTypeOf<string>();
  });
});
