import {truncate} from '../../src/string/truncate.ts';

describe('string/truncate', () => {
  it('basic test', () => {
    expect(truncate('The quick brown fox', {length: 12})).toBe('The quick...');
    expect(truncate('The quick brown fox', {length: 12, separator: ' '})).toBe('The...');
  });
});
