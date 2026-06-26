import type {ToKebabCaseKeys} from '../../src/types/to-kebab-case-keys.ts';

describe('types/ToKebabCaseKeys', () => {
  it('basic test', () => {
    expectTypeOf<ToKebabCaseKeys<{fooBar: 1}>>().toEqualTypeOf<{'foo-bar': 1}>();
  });
});
