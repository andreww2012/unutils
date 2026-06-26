import type {HasReadonlyKeys} from '../../src/types/has-readonly-keys.ts';

describe('types/HasReadonlyKeys', () => {
  it('basic test', () => {
    expectTypeOf<HasReadonlyKeys<{readonly a: 1}>>().toEqualTypeOf<true>();
  });
});
