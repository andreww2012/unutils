import {trim} from '../../src/string/trim.ts';

describe('string/trim', () => {
  it('removes leading and trailing whitespace', () => {
    expect(trim(' x ')).toBe('x');
  });
});
