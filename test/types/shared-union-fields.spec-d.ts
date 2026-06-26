import type {SharedUnionFields} from '../../src/types/shared-union-fields.ts';

describe('types/SharedUnionFields', () => {
  it('basic test', () => {
    expectTypeOf<SharedUnionFields<{a: 1; b: 2} | {a: 1; c: 3}>>().toEqualTypeOf<{a: 1}>();
  });
});
