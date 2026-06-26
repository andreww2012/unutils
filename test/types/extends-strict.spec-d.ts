import type {ExtendsStrict} from '../../src/types/extends-strict.ts';

describe('types/ExtendsStrict', () => {
  it('basic test', () => {
    expectTypeOf<ExtendsStrict<1, number>>().toEqualTypeOf<true>();
  });
});
