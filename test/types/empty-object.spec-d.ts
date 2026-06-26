import type {EmptyObject} from '../../src/types/empty-object.ts';

describe('types/EmptyObject', () => {
  it('basic test', () => {
    expectTypeOf<EmptyObject extends object ? true : false>().toEqualTypeOf<true>();
  });
});
