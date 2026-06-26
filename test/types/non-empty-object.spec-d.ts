import type {NonEmptyObject} from '../../src/types/non-empty-object.ts';

describe('types/NonEmptyObject', () => {
  it('basic test', () => {
    expectTypeOf<NonEmptyObject<{a: 1}>>().toEqualTypeOf<{a: 1}>();
  });
});
