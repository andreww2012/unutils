import {toLowerCase} from '../../src/string/to-lower-case.ts';

describe('string/toLowerCase', () => {
  it('basic test', () => {
    expect(toLowerCase('hello world')).toBe('hello world');
    expect(toLowerCase('fooBarBaz')).toBe('foo bar baz');
  });
});
