import {isIncludedIn} from '../../src/predicate/is-included-in.ts';

describe('predicate/isIncludedIn', () => {
  it('basic test', () => {
    expect(isIncludedIn(2, [1, 2, 3])).toBe(true);
    expect(isIncludedIn(4, [1, 2, 3])).toBe(false);
  });
});
