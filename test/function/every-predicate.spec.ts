import {everyPredicate} from '../../src/function/every-predicate.ts';

describe('function/everyPredicate', () => {
  it('basic test', () => {
    const isLongString = everyPredicate([
      (value: unknown) => typeof value === 'string',
      (value: unknown) => typeof value === 'string' && value.length > 3,
    ]);

    expect(isLongString('hello')).toBe(true);
    expect(isLongString('hi')).toBe(false);
  });
});
