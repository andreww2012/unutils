import type {MergeObjects} from '../../src/types/merge-objects.ts';

describe('types/MergeObjects', () => {
  it('basic test', () => {
    expectTypeOf<MergeObjects<{a: 1}, {b: 2}>>().toEqualTypeOf<{a: 1; b: 2}>();
  });
});
