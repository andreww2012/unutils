import type {AllUnionKeys} from '../../src/types/all-union-keys.ts';

describe('types/AllUnionKeys', () => {
  it('basic test', () => {
    expectTypeOf<AllUnionKeys<{a: 1} | {b: 2}>>().toEqualTypeOf<'a' | 'b'>();
  });
});
