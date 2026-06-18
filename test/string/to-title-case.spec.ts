import {toTitleCase} from '../../src/string/to-title-case.ts';

describe('string/toTitleCase', () => {
  it('splits and capitalizes each word', () => {
    expect(toTitleCase('hello world')).toBe('Hello World');
    expect(toTitleCase('fooBar')).toBe('Foo Bar');
    expect(toTitleCase('snake_case_value')).toBe('Snake Case Value');
  });

  it('preserves consecutive uppercase by default', () => {
    expect(toTitleCase('XMLHttpRequest')).toBe('XML Http Request');
  });

  it('lowercases runs of capitals when preserveConsecutiveUppercase is false', () => {
    expect(toTitleCase('XMLHttpRequest', {preserveConsecutiveUppercase: false})).toBe(
      'Xml Http Request',
    );
  });
});
