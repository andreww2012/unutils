import type {AddUndefinedToOptionalDeep} from '../../src/types/add-undefined-to-optional-deep.ts';

describe('types/AddUndefinedToOptionalDeep', () => {
  it('basic test', () => {
    expectTypeOf<AddUndefinedToOptionalDeep<{a?: number}>['a']>().toEqualTypeOf<
      number | undefined
    >();
  });
});
