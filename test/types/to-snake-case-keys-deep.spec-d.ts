import type {ToSnakeCaseKeysDeep} from '../../src/types/to-snake-case-keys-deep.ts';

describe('types/ToSnakeCaseKeysDeep', () => {
  it('basic test', () => {
    expectTypeOf<ToSnakeCaseKeysDeep<{fooBar: {aB: 1}}>>().toEqualTypeOf<{
      foo_bar: {a_b: 1};
    }>();
  });
});
