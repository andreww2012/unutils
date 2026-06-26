import type {EmptyObject} from '../../src/types/index.ts';
import type {RequireAllOrNone} from '../../src/types/require-all-or-none.ts';

describe('types/RequireAllOrNone', () => {
  it('basic test', () => {
    expectTypeOf<
      EmptyObject extends RequireAllOrNone<{a?: 1; b?: 2}> ? true : false
    >().toEqualTypeOf<true>();
  });
});
