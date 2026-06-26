import type {StringRepeat} from '../../src/types/string-repeat.ts';

describe('types/StringRepeat', () => {
  it('basic test', () => {
    expectTypeOf<StringRepeat<'ab', 2>>().toEqualTypeOf<'abab'>();
  });
});
