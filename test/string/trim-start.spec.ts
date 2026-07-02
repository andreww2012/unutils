import {trimStart} from '../../src/string/trim-start.ts';

describe('string/trimStart', () => {
  it('removes leading whitespace only', () => {
    expect(trimStart(' x ')).toBe('x ');
  });
});
