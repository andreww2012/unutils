import type {RemovePrefix} from '../../src/types/remove-prefix.ts';

describe('types/RemovePrefix', () => {
  it('basic test', () => {
    expectTypeOf<RemovePrefix<'foo-bar', 'foo-'>>().toEqualTypeOf<'bar'>();
  });
});
