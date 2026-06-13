import {jsonParse} from '../../src/json/json-parse.ts';

describe('json/jsonParse', () => {
  it('parses valid JSON', () => {
    expect(jsonParse('{"a": 1, "b": [2, 3]}')).toStrictEqual({a: 1, b: [2, 3]});
  });

  it('decodes standalone tokens that JSON.parse rejects', () => {
    expect(jsonParse('Infinity')).toBe(Number.POSITIVE_INFINITY);
    expect(jsonParse('true')).toBe(true);
  });

  it('returns non-string input as-is', () => {
    const source = {a: 1};

    expect(jsonParse(source)).toBe(source);
  });

  it('throws on malformed JSON', () => {
    expect(() => jsonParse('{a: 1}')).toThrow(SyntaxError);
  });

  it('throws on suspected prototype pollution', () => {
    expect(() => jsonParse('{"__proto__": {"polluted": true}}')).toThrow();
  });
});
