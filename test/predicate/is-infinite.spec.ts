import {isInfinite} from '../../src/predicate/is-infinite.ts';

describe('predicate/isInfinite', () => {
  it('basic test', () => {
    expect(isInfinite(Number.POSITIVE_INFINITY)).toBe(true);
    expect(isInfinite(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(isInfinite(42)).toBe(false);
  });
});
