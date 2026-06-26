import type {EnsureFloat} from '../../src/types/ensure-float.ts';

describe('types/EnsureFloat', () => {
  it('basic test', () => {
    expectTypeOf<EnsureFloat<1.5>>().toEqualTypeOf<1.5>();
  });
});
