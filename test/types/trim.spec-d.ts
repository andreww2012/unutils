import type {Trim} from '../../src/types/trim.ts';

describe('types/Trim', () => {
  it('basic test', () => {
    expectTypeOf<Trim<' hi '>>().toEqualTypeOf<'hi'>();
  });
});
