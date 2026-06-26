import type {JsonPrimitive} from '../../src/types/json-primitive.ts';

describe('types/JsonPrimitive', () => {
  it('basic test', () => {
    expectTypeOf<JsonPrimitive>().toEqualTypeOf<string | number | boolean | null>();
  });
});
