import {objectUpdate} from '../../src/object/object-update.ts';

describe('object/objectUpdate', () => {
  it('returns the target type unchanged', () => {
    expectTypeOf(objectUpdate({name: 'Ada', age: 41}, {age: 42})).toEqualTypeOf<{
      name: string;
      age: number;
    }>();
  });

  it('rejects a key that does not exist on the target', () => {
    const user = {name: 'Ada', age: 41};

    // @ts-expect-error - 'email' does not exist on the target
    objectUpdate(user, {email: 'ada@example.com'});
  });

  it('rejects a mismatched value type', () => {
    const user = {name: 'Ada', age: 41};

    // @ts-expect-error - 'age' must be a number
    objectUpdate(user, {age: '42'});
  });
});
