import type {SharedUnionFieldsDeep} from '../../src/types/shared-union-fields-deep.ts';

describe('types/SharedUnionFieldsDeep', () => {
  it('basic test', () => {
    expectTypeOf<SharedUnionFieldsDeep<{a: {x: 1}} | {a: {x: 1}; b: 2}>>().toEqualTypeOf<{
      a: {x: 1};
    }>();
  });
});
