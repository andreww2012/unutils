import type {ArrayJoin} from '../../src/types/array-join.ts';

describe('types/ArrayJoin', () => {
  it('basic test', () => {
    expectTypeOf<ArrayJoin<['a', 'b', 'c'], '-'>>().toEqualTypeOf<'a-b-c'>();
  });
});
