import {isIn} from '../../src/predicate/is-in.ts';

describe('predicate/isIn', () => {
  it('basic test', () => {
    const value: unknown = {foo: 1};

    expect(isIn('foo', value)).toBe(true);
    expect(isIn('bar', value)).toBe(false);
    expect(isIn('toString', value)).toBe(true);
  });
});
