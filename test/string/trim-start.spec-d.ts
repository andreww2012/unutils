import {trimStart} from '../../src/string/trim-start.ts';

describe('string/trimStart', () => {
  it('types the result as the precise left-trimmed literal', () => {
    expectTypeOf(trimStart(' x ')).toEqualTypeOf<'x '>();
  });
});
