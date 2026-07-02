import {stringConcat} from '../../src/string/string-concat.ts';

describe('string/stringConcat', () => {
  it('types the result as the precise concatenated literal', () => {
    expectTypeOf(stringConcat('a', 'b', 'c')).toEqualTypeOf<'abc'>();
  });
});
