import {jsonParseSafe} from '../../src/json/json-parse-safe.ts';

describe('json/jsonParseSafe', () => {
  it('defaults the result to `unknown`', () => {
    expectTypeOf(jsonParseSafe('{"a": 1}')).toEqualTypeOf<unknown>();
  });

  it('returns the explicit type argument', () => {
    expectTypeOf(jsonParseSafe<{a: number}>('{"a": 1}')).toEqualTypeOf<{a: number}>();
  });

  it('accepts non-string input', () => {
    expectTypeOf(jsonParseSafe({a: 1})).toEqualTypeOf<unknown>();
    expectTypeOf(jsonParseSafe<number>(42)).toEqualTypeOf<number>();
  });
});
