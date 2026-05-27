import {deburr} from '../../src/string/deburr.ts';

describe('string/deburr', () => {
  it('basic test', () => {
    expect(deburr('é')).toBe('e');
    expect(deburr('Æ')).toBe('Ae');
  });
});
