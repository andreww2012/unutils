import type {UnionMember} from '../../src/types/union-member.ts';

describe('types/UnionMember', () => {
  it('basic test', () => {
    expectTypeOf<UnionMember<1 | 2>>().toEqualTypeOf<2>();
  });
});
