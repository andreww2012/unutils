import {isJson} from '../../src/predicate/is-json.ts';

describe('predicate/isJson', () => {
  it('basic test', () => {
    expect(isJson('{"a":1}')).toBe(true);
    expect(isJson('not json')).toBe(false);
  });
});
