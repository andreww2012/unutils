import type {SingleKeyObject} from '../../src/types/single-key-object.ts';

describe('types/SingleKeyObject', () => {
  it('basic test', () => {
    expectTypeOf<SingleKeyObject<{a: 1}>>().toEqualTypeOf<{a: 1}>();
  });
});
