import type {UnwrapPartial} from '../../src/types/unwrap-partial.ts';

describe('types/UnwrapPartial', () => {
  it('basic test', () => {
    expectTypeOf<UnwrapPartial<{a?: number}>>().toEqualTypeOf<{a: number}>();
  });
});
