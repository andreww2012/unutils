import {ensurePrefix} from '../../src/string/ensure-prefix.ts';

describe('string/ensurePrefix', () => {
  it('prepends the prefix when it is missing', () => {
    expect(ensurePrefix('user-1', '/')).toBe('/user-1');
  });

  it('leaves the string unchanged when the prefix is already present', () => {
    expect(ensurePrefix('/user-1', '/')).toBe('/user-1');
  });

  it('supports multi-character prefixes', () => {
    expect(ensurePrefix('example.com', 'https://')).toBe('https://example.com');
    expect(ensurePrefix('https://example.com', 'https://')).toBe('https://example.com');
  });

  it('returns the string unchanged for an empty prefix', () => {
    expect(ensurePrefix('value', '')).toBe('value');
  });
});
