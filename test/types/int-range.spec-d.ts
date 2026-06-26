import type {IntRange} from '../../src/types/int-range.ts';

describe('types/IntRange', () => {
  it('basic test', () => {
    expectTypeOf<IntRange<0, 3>>().toEqualTypeOf<0 | 1 | 2>();
  });
});
