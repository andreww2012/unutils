import {isIncludedIn} from '../../src/predicate/is-included-in.ts';

describe('predicate/isIncludedIn', () => {
  it('narrows the value to the container union', () => {
    const value = 'cat' as 'cat' | 'dog' | 'mouse';

    if (isIncludedIn(value, ['cat', 'dog'] as const)) {
      expectTypeOf(value).toEqualTypeOf<'cat' | 'dog'>();
    }
  });
});
