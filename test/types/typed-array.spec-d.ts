import type {TypedArray} from '../../src/types/typed-array.ts';

describe('types/TypedArray', () => {
  it('basic test', () => {
    expectTypeOf<Uint8Array extends TypedArray ? true : false>().toEqualTypeOf<true>();
  });
});
