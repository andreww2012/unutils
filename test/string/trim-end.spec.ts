import {trimEnd} from '../../src/string/trim-end.ts';

describe('string/trimEnd', () => {
  it('removes trailing whitespace only', () => {
    expect(trimEnd(' x ')).toBe(' x');
  });
});
