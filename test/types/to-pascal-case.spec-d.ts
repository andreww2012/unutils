import type {ToPascalCase} from '../../src/types/to-pascal-case.ts';

describe('types/ToPascalCase', () => {
  it('basic test', () => {
    expectTypeOf<ToPascalCase<'foo-bar'>>().toEqualTypeOf<'FooBar'>();
  });
});
