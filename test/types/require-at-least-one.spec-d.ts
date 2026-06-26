import type {EmptyObject} from '../../src/types/index.ts';
import type {RequireAtLeastOne} from '../../src/types/require-at-least-one.ts';

describe('types/RequireAtLeastOne', () => {
  it('basic test', () => {
    expectTypeOf<
      {a: 1} extends RequireAtLeastOne<{a?: 1; b?: 2}> ? true : false
    >().toEqualTypeOf<true>();
    expectTypeOf<
      EmptyObject extends RequireAtLeastOne<{a?: 1; b?: 2}> ? true : false
    >().toEqualTypeOf<false>();
  });
});
