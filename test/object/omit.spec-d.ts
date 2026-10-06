import {omit} from '../../src/object/omit.ts';

describe('object/omit', () => {
  it('passes string keys to the predicate', () => {
    omit({1: 'a', b: 2}, (_value, key) => {
      expectTypeOf(key).toEqualTypeOf<'1' | 'b'>();
      return true;
    });
  });
});
