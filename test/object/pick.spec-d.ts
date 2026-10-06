import {pick} from '../../src/object/pick.ts';

describe('object/pick', () => {
  it('passes string keys to the predicate', () => {
    pick({1: 'a', b: 2}, (_value, key) => {
      expectTypeOf(key).toEqualTypeOf<'1' | 'b'>();
      return true;
    });
  });
});
