import type {RemoveSuffix} from '../../src/types/remove-suffix.ts';

describe('types/RemoveSuffix', () => {
  it('basic test', () => {
    expectTypeOf<RemoveSuffix<'foo-bar', '-bar'>>().toEqualTypeOf<'foo'>();
  });
});
