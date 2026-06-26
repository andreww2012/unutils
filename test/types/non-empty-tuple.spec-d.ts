import type {NonEmptyTuple} from '../../src/types/non-empty-tuple.ts';

describe('types/NonEmptyTuple', () => {
  it('basic test', () => {
    expectTypeOf<NonEmptyTuple<number>>().toEqualTypeOf<readonly [number, ...number[]]>();
  });
});
