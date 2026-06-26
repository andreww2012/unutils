import type {LiteralToPrimitiveDeep} from '../../src/types/literal-to-primitive-deep.ts';

describe('types/LiteralToPrimitiveDeep', () => {
  it('basic test', () => {
    expectTypeOf<LiteralToPrimitiveDeep<{a: 'x'; b: 1}>>().toEqualTypeOf<{a: string; b: number}>();
  });
});
