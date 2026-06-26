import type {JsonValue} from '../../src/types/json-value.ts';

describe('types/JsonValue', () => {
  it('basic test', () => {
    expectTypeOf<{a: 1} extends JsonValue ? true : false>().toEqualTypeOf<true>();
    expectTypeOf<{a: () => void} extends JsonValue ? true : false>().toEqualTypeOf<false>();
  });
});
