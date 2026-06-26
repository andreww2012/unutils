import type {MaybePromise} from '../../src/types/maybe-promise.ts';

describe('types/MaybePromise', () => {
  it('basic test', () => {
    expectTypeOf<MaybePromise<number>>().toEqualTypeOf<number | PromiseLike<number>>();
  });
});
