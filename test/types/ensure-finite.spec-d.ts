import type {EnsureFinite} from '../../src/types/ensure-finite.ts';

describe('types/EnsureFinite', () => {
  it('basic test', () => {
    expectTypeOf<EnsureFinite<1>>().toEqualTypeOf<1>();
  });
});
