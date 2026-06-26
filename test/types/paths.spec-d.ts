import type {Paths} from '../../src/types/paths.ts';

describe('types/Paths', () => {
  it('basic test', () => {
    expectTypeOf<Paths<{a: {b: number}}>>().toEqualTypeOf<'a' | 'a.b'>();
  });
});
