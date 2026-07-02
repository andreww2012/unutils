import type {ToConstantCaseKeys} from '../../src/types/to-constant-case-keys.ts';

describe('types/ToConstantCaseKeys', () => {
  it('constant-cases the top-level keys', () => {
    expectTypeOf<ToConstantCaseKeys<{fooBar: 1; bazQux: {nestedKey: 2}}>>().toEqualTypeOf<{
      FOO_BAR: 1;
      BAZ_QUX: {nestedKey: 2};
    }>();
  });
});
