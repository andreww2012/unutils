import type {ToConstantCaseKeysDeep} from '../../src/types/to-constant-case-keys-deep.ts';

describe('types/ToConstantCaseKeysDeep', () => {
  it('constant-cases keys recursively', () => {
    expectTypeOf<ToConstantCaseKeysDeep<{fooBar: {bazQux: 1}}>>().toEqualTypeOf<{
      FOO_BAR: {BAZ_QUX: 1};
    }>();
  });
});
