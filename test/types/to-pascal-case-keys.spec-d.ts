import type {ToPascalCaseKeys} from '../../src/types/to-pascal-case-keys.ts';

describe('types/ToPascalCaseKeys', () => {
  it('basic test', () => {
    expectTypeOf<ToPascalCaseKeys<{'foo-bar': 1}>>().toEqualTypeOf<{FooBar: 1}>();
  });
});
