import type {IsTuple} from '../../src/types/is-tuple.ts';

describe('types/IsTuple', () => {
  it('basic test', () => {
    expectTypeOf<IsTuple<[1, 2]>>().toEqualTypeOf<true>();
  });
});
