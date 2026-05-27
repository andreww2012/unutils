import {capitalize} from '../../src/string/capitalize.ts';

describe('string/capitalize', () => {
  it('basic test', () => {
    expect(capitalize('fred')).toBe('Fred');
    expect(capitalize('FRED')).toBe('Fred');
  });
});
