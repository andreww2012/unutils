import {toStartCase} from '../../src/string/to-start-case.ts';

describe('string/toStartCase', () => {
  it('basic test', () => {
    expect(toStartCase('hello world')).toBe('Hello World');
    expect(toStartCase('fooBarBaz')).toBe('Foo Bar Baz');
  });
});
