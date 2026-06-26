import type {JsonObject} from '../../src/types/json-object.ts';

describe('types/JsonObject', () => {
  it('basic test', () => {
    expectTypeOf<{a: 1} extends JsonObject ? true : false>().toEqualTypeOf<true>();
  });
});
