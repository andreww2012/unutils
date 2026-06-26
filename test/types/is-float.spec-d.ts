import type {IsFloat} from '../../src/types/is-float.ts';

describe('types/IsFloat', () => {
  it('basic test', () => {
    expectTypeOf<IsFloat<1.5>>().toEqualTypeOf<true>();
  });
});
