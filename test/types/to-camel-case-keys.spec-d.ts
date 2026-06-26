import type {ToCamelCaseKeys} from '../../src/types/to-camel-case-keys.ts';

describe('types/ToCamelCaseKeys', () => {
  it('basic test', () => {
    expectTypeOf<ToCamelCaseKeys<{'foo-bar': 1}>>().toEqualTypeOf<{fooBar: 1}>();
  });
});
