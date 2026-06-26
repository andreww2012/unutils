import type {ToConstantCase} from '../../src/types/to-constant-case.ts';

describe('types/ToConstantCase', () => {
  it('basic test', () => {
    expectTypeOf<ToConstantCase<'fooBar'>>().toEqualTypeOf<'FOO_BAR'>();
  });
});
