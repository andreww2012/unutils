import {lowerFirst} from '../../src/string/lower-first.ts';

describe('string/lowerFirst', () => {
  it('basic test', () => {
    expect(lowerFirst('Fred')).toBe('fred');
    expect(lowerFirst('FRED')).toBe('fRED');
  });
});
