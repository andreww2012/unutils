import {isKeyIn} from '../../src/predicate/is-key-in.ts';

describe('predicate/isKeyIn', () => {
  it('narrows the key to those present in the object', () => {
    const object = {foo: 1, bar: 2};
    const key = 'foo' as 'foo' | 'bar' | 'baz';

    if (isKeyIn(key, object)) {
      expectTypeOf(key).toEqualTypeOf<'foo' | 'bar'>();
    }
  });
});
