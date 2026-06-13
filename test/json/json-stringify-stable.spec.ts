import {jsonStringifyStable} from '../../src/json/json-stringify-stable.ts';

describe('json/jsonStringifyStable', () => {
  it('basic test', () => {
    expect(jsonStringifyStable({b: 1, a: 2})).toBe('{"a":2,"b":1}');
  });
});
