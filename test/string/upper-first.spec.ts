import {upperFirst} from '../../src/string/upper-first.ts';

describe('string/upperFirst', () => {
  it('basic test', () => {
    expect(upperFirst('fred')).toBe('Fred');
    expect(upperFirst('FRED')).toBe('FRED');
  });
});
