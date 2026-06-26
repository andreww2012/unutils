import type {NonEmptyString} from '../../src/types/non-empty-string.ts';

describe('types/NonEmptyString', () => {
  it('basic test', () => {
    expectTypeOf<NonEmptyString<'a'>>().toEqualTypeOf<'a'>();
  });
});
