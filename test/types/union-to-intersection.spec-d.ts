import type {UnionToIntersection} from '../../src/types/union-to-intersection.ts';

describe('types/UnionToIntersection', () => {
  it('basic test', () => {
    expectTypeOf<UnionToIntersection<{a: 1} | {b: 2}>>().toEqualTypeOf<{a: 1} & {b: 2}>();
  });
});
