import type {UnionToTuple} from '../../src/types/union-to-tuple.ts';

describe('types/UnionToTuple', () => {
  it('basic test', () => {
    expectTypeOf<UnionToTuple<1 | 2>>().toEqualTypeOf<[1, 2]>();
  });
});
