import type {SetNonNullable} from '../../src/types/set-non-nullable.ts';

describe('types/SetNonNullable', () => {
  it('basic test', () => {
    expectTypeOf<SetNonNullable<{a: 1; b: 2 | null}, 'b'>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
