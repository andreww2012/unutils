import {objectUpdate} from '../../src/object/object-update.ts';

describe('object/objectUpdate', () => {
  it('applies the partial update in place and returns the target', () => {
    const target = {name: 'Ada', age: 41};
    const result = objectUpdate(target, {age: 42});

    expect(result).toStrictEqual({name: 'Ada', age: 42});
    expect(result).toBe(target);
  });
});
