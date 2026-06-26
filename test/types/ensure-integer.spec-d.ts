import type {EnsureInteger} from '../../src/types/ensure-integer.ts';

describe('types/EnsureInteger', () => {
  it('basic test', () => {
    expectTypeOf<EnsureInteger<1>>().toEqualTypeOf<1>();
  });
});
