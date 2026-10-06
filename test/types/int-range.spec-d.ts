import type {IntRange} from '../../src/types/int-range.ts';

describe('types/IntRange', () => {
  it('basic test', () => {
    expectTypeOf<IntRange<0, 3>>().toEqualTypeOf<0 | 1 | 2>();
  });

  it('supports negative numbers', () => {
    expectTypeOf<IntRange<-2, 2>>().toEqualTypeOf<-2 | -1 | 0 | 1>();
  });

  it('resolves to never when the start is greater than the end', () => {
    expectTypeOf<IntRange<2, -2>>().toEqualTypeOf<never>();
  });
});
