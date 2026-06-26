import type {UnwrapRequired} from '../../src/types/unwrap-required.ts';

describe('types/UnwrapRequired', () => {
  it('basic test', () => {
    expectTypeOf<UnwrapRequired<{a: number}>>().toEqualTypeOf<{a: number}>();
  });
});
