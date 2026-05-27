import {isValidLength} from '../../src/misc/is-valid-length.ts';

describe('misc/isValidLength', () => {
  it('basic test', () => {
    expect(isValidLength(0)).toBe(true);
    expect(isValidLength(42)).toBe(true);
    expect(isValidLength(-1)).toBe(false);
    expect(isValidLength(1.5)).toBe(false);
    expect(isValidLength(Number.MAX_SAFE_INTEGER + 1)).toBe(false);
  });
});
