import type {NegativeInfinity} from '../../src/types/negative-infinity.ts';

describe('types/NegativeInfinity', () => {
  it('basic test', () => {
    expectTypeOf<NegativeInfinity extends number ? true : false>().toEqualTypeOf<true>();
  });
});
