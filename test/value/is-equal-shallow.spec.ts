import {isEqualShallow} from '../../src/value/is-equal-shallow.ts';

describe('value/isEqualShallow', () => {
  it('basic test', () => {
    expect(isEqualShallow([1, 2, 3], [1, 2, 3])).toBe(true);
    expect(isEqualShallow([[1], [2]], [[1], [2]])).toBe(false);
  });
});
