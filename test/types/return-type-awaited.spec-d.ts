import type {ReturnTypeAwaited} from '../../src/types/return-type-awaited.ts';

describe('types/ReturnTypeAwaited', () => {
  it('basic test', () => {
    expectTypeOf<ReturnTypeAwaited<() => Promise<number>>>().toEqualTypeOf<number>();
  });
});
