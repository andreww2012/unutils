// cspell:ignore foobaz
import type {Replace} from '../../src/types/replace.ts';

describe('types/Replace', () => {
  it('basic test', () => {
    expectTypeOf<Replace<'foobar', 'bar', 'baz'>>().toEqualTypeOf<'foobaz'>();
  });
});
