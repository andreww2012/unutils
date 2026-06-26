import type {IsInteger} from '../../src/types/is-integer.ts';

describe('types/IsInteger', () => {
  it('basic test', () => {
    expectTypeOf<IsInteger<1>>().toEqualTypeOf<true>();
  });
});
