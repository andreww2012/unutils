import type {MergeDeep} from '../../src/types/merge-deep.ts';

describe('types/MergeDeep', () => {
  it('basic test', () => {
    expectTypeOf<MergeDeep<{a: {x: 1}}, {a: {y: 2}}>>().toEqualTypeOf<{a: {x: 1; y: 2}}>();
  });
});
