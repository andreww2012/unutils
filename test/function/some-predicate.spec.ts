import {somePredicate} from '../../src/function/some-predicate.ts';

describe('function/somePredicate', () => {
  it('basic test', () => {
    const isStringOrNumber = somePredicate([
      (value: unknown) => typeof value === 'string',
      (value: unknown) => typeof value === 'number',
    ]);

    expect(isStringOrNumber('hello')).toBe(true);
    expect(isStringOrNumber(true)).toBe(false);
  });
});
