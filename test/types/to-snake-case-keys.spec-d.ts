import type {ToSnakeCaseKeys} from '../../src/types/to-snake-case-keys.ts';

describe('types/ToSnakeCaseKeys', () => {
  it('basic test', () => {
    expectTypeOf<ToSnakeCaseKeys<{fooBar: 1}>>().toEqualTypeOf<{foo_bar: 1}>();
  });
});
