import type {ToCamelCase} from '../../src/types/to-camel-case.ts';

describe('types/ToCamelCase', () => {
  it('basic test', () => {
    expectTypeOf<ToCamelCase<'foo-bar'>>().toEqualTypeOf<'fooBar'>();
  });
});
