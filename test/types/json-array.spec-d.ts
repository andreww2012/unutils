import type {JsonArray} from '../../src/types/json-array.ts';

describe('types/JsonArray', () => {
  it('basic test', () => {
    expectTypeOf<[1, 2] extends JsonArray ? true : false>().toEqualTypeOf<true>();
  });
});
