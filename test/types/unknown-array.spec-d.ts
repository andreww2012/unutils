import type {UnknownArray} from '../../src/types/unknown-array.ts';

describe('types/UnknownArray', () => {
  it('basic test', () => {
    expectTypeOf<[] extends UnknownArray ? true : false>().toEqualTypeOf<true>();
  });
});
