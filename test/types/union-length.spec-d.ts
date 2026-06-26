import type {UnionLength} from '../../src/types/union-length.ts';

describe('types/UnionLength', () => {
  it('basic test', () => {
    expectTypeOf<UnionLength<1 | 2 | 3>>().toEqualTypeOf<3>();
  });
});
