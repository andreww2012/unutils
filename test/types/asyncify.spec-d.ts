import type {Asyncify} from '../../src/types/asyncify.ts';

describe('types/Asyncify', () => {
  it('basic test', () => {
    expectTypeOf<Asyncify<(a: number) => string>>().toEqualTypeOf<(a: number) => Promise<string>>();
  });
});
