import {jsonParseSafe} from '../../src/json/json-parse-safe.ts';

describe('json/jsonParseSafe', () => {
  it('parses valid JSON', () => {
    expect(jsonParseSafe('{"a": 1, "b": [2, 3]}')).toStrictEqual({a: 1, b: [2, 3]});
  });

  it('falls back to the original string on malformed JSON', () => {
    expect(jsonParseSafe('{a: 1}')).toBe('{a: 1}');
  });

  it('returns a non-JSON string untouched', () => {
    expect(jsonParseSafe('hello')).toBe('hello');
  });

  it('decodes standalone tokens that JSON.parse rejects', () => {
    expect(jsonParseSafe('NaN')).toBeNaN();
  });

  it('returns non-string input as-is', () => {
    const source = {a: 1};

    expect(jsonParseSafe(source)).toBe(source);
  });

  it('drops prototype-polluting keys instead of throwing', () => {
    const warn = vi.spyOn(console, 'warn').mockReturnValue(undefined);

    const parsed = jsonParseSafe<Record<string, unknown>>('{"__proto__": {"polluted": true}}');

    expect(parsed.polluted).toBeUndefined();
    expect(({} as Record<string, unknown>).polluted).toBeUndefined();
    expect(warn).toHaveBeenCalled();

    warn.mockRestore();
  });
});
