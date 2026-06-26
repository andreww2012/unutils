import type {StringSplit} from '../../src/types/string-split.ts';

describe('types/StringSplit', () => {
  it('basic test', () => {
    expectTypeOf<StringSplit<'a,b,c', ','>>().toEqualTypeOf<['a', 'b', 'c']>();
  });
});
