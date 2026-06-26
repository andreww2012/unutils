import type {ToSnakeCase} from '../../src/types/to-snake-case.ts';

describe('types/ToSnakeCase', () => {
  it('basic test', () => {
    expectTypeOf<ToSnakeCase<'fooBar'>>().toEqualTypeOf<'foo_bar'>();
  });
});
