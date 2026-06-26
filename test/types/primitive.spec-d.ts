import type {Primitive} from '../../src/types/primitive.ts';

describe('types/Primitive', () => {
  it('basic test', () => {
    expectTypeOf<Primitive>().toEqualTypeOf<
      string | number | boolean | symbol | bigint | null | undefined
    >();
  });
});
