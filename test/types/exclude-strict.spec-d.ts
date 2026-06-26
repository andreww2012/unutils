import type {ExcludeStrict} from '../../src/types/exclude-strict.ts';

describe('types/ExcludeStrict', () => {
  it('basic test', () => {
    expectTypeOf<ExcludeStrict<1 | 2 | 'x', number>>().toEqualTypeOf<'x'>();
  });
});
