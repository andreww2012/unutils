import type {IncludesUndefined} from '../../src/types/includes-undefined.ts';

describe('types/IncludesUndefined', () => {
  it('basic test', () => {
    expectTypeOf<IncludesUndefined<number | undefined>>().toEqualTypeOf<true>();
  });
});
