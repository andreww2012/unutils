import {objectFromKeys} from '../../src/object/object-from-keys.ts';

describe('object/objectFromKeys', () => {
  it('produces a precisely-typed record from literal keys', () => {
    expectTypeOf(objectFromKeys(['a', 'bb'] as const, (key) => key.length)).toEqualTypeOf<{
      a: number;
      bb: number;
    }>();
  });
});
