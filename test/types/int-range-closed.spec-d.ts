import type {IntRangeClosed} from '../../src/types/int-range-closed.ts';

describe('types/IntRangeClosed', () => {
  it('basic test', () => {
    expectTypeOf<IntRangeClosed<0, 3>>().toEqualTypeOf<0 | 1 | 2 | 3>();
  });
});
