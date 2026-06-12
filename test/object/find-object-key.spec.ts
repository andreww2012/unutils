import {findObjectKey} from '../../src/object/find-object-key.ts';

describe('object/findObjectKey', () => {
  it('returns the first matching key', () => {
    expect(findObjectKey({a: 1, b: 2, c: 3}, (value) => value > 1)).toBe('b');
  });

  it('scans from the end when fromRight is true', () => {
    expect(findObjectKey({a: 1, b: 2, c: 3}, (value) => value > 1, true)).toBe('c');
  });

  it('returns undefined when nothing matches', () => {
    expect(findObjectKey({a: 1}, (value) => value > 5)).toBeUndefined();
  });
});
