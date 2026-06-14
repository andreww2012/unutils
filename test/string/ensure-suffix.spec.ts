import {ensureSuffix} from '../../src/string/ensure-suffix.ts';

describe('string/ensureSuffix', () => {
  it('appends the suffix when it is missing', () => {
    expect(ensureSuffix('file', '.ts')).toBe('file.ts');
  });

  it('leaves the string unchanged when the suffix is already present', () => {
    expect(ensureSuffix('file.ts', '.ts')).toBe('file.ts');
  });

  it('supports multi-character suffixes', () => {
    expect(ensureSuffix('path/to/dir', '/')).toBe('path/to/dir/');
    expect(ensureSuffix('path/to/dir/', '/')).toBe('path/to/dir/');
  });

  it('returns the string unchanged for an empty suffix', () => {
    expect(ensureSuffix('value', '')).toBe('value');
  });
});
