import type {IntRangeClosed} from '../../src/types/int-range-closed.ts';

describe('types/IntRangeClosed', () => {
  it('basic test', () => {
    expectTypeOf<IntRangeClosed<0, 3>>().toEqualTypeOf<0 | 1 | 2 | 3>();
  });

  it('supports negative numbers', () => {
    expectTypeOf<IntRangeClosed<-2, 2>>().toEqualTypeOf<-2 | -1 | 0 | 1 | 2>();
  });
});
