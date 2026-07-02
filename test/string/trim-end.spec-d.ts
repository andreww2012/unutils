import {trimEnd} from '../../src/string/trim-end.ts';

describe('string/trimEnd', () => {
  it('types the result as the precise right-trimmed literal', () => {
    expectTypeOf(trimEnd(' x ')).toEqualTypeOf<' x'>();
  });
});
