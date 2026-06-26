import type {DiscriminatedUnion} from '../../src/types/discriminated-union.ts';

describe('types/DiscriminatedUnion', () => {
  it('basic test', () => {
    expectTypeOf<
      DiscriminatedUnion<'type', {a: {x: 1}; b: {y: 2}}> extends {type: 'a' | 'b'} ? true : false
    >().toEqualTypeOf<true>();
  });
});
