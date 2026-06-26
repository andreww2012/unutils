import type {MergeTypes} from '../../src/types/merge-types.ts';

describe('types/MergeTypes', () => {
  it('basic test', () => {
    expectTypeOf<MergeTypes<{a: 1; b: 2}, {b: 3; c: 4}>>().toEqualTypeOf<{a: 1; b: 3; c: 4}>();
  });
});
