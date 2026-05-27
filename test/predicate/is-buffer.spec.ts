import {isBuffer} from '../../src/predicate/is-buffer.ts';

describe('predicate/isBuffer', () => {
  it('returns true for a Buffer instance', () => {
    expect(isBuffer(Buffer.from('hello'))).toBe(true);
  });

  it('returns false for non-Buffer values', () => {
    expect(isBuffer('hello')).toBe(false);
    expect(isBuffer(new Uint8Array([1, 2, 3]))).toBe(false);
    expect(isBuffer({})).toBe(false);
    expect(isBuffer(null)).toBe(false);
    expect(isBuffer(undefined)).toBe(false);
  });

  it('narrows the type to Buffer when truthy', () => {
    const value: unknown = Buffer.from('abc');

    expect(isBuffer(value) && value.toString()).toBe('abc');
  });
});
