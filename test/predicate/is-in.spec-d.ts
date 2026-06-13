import {isIn} from '../../src/predicate/is-in.ts';

describe('predicate/isIn', () => {
  it('narrows the object to include the checked key', () => {
    const data: unknown = {foo: 1};

    if (isIn('foo', data)) {
      expectTypeOf(data).toEqualTypeOf<Record<'foo', unknown>>();
    }
  });
});
