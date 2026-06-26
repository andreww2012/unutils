import type {ToKebabCase} from '../../src/types/to-kebab-case.ts';

describe('types/ToKebabCase', () => {
  it('basic test', () => {
    expectTypeOf<ToKebabCase<'fooBar'>>().toEqualTypeOf<'foo-bar'>();
  });
});
