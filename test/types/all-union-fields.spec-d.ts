import type {AllUnionFields} from '../../src/types/all-union-fields.ts';

describe('types/AllUnionFields', () => {
  it('basic test', () => {
    expectTypeOf<keyof AllUnionFields<{a: 1} | {b: 2}>>().toEqualTypeOf<'a' | 'b'>();
  });
});
