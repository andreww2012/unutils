import {toCamelCase} from '../../src/string/to-camel-case.ts';

describe('string/toCamelCase', () => {
  it('basic test', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
    expect(toCamelCase('foo-bar-baz')).toBe('fooBarBaz');
  });
});
