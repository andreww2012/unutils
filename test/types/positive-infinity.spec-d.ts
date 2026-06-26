import type {PositiveInfinity} from '../../src/types/positive-infinity.ts';

describe('types/PositiveInfinity', () => {
  it('basic test', () => {
    expectTypeOf<PositiveInfinity extends number ? true : false>().toEqualTypeOf<true>();
  });
});
