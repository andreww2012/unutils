import {jsonParse} from '../../src/json/json-parse.ts';

describe('json/jsonParse', () => {
  it('defaults to `unknown`', () => {
    expectTypeOf(jsonParse('{"a": 1}')).toEqualTypeOf<unknown>();
  });

  it('returns the explicitly provided type argument', () => {
    expectTypeOf(jsonParse<{a: number}>('{"a": 1}')).toEqualTypeOf<{a: number}>();
  });
});
