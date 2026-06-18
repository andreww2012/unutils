import {objectFromKeys} from '../../src/object/object-from-keys.ts';

describe('object/objectFromKeys', () => {
  it('builds an object mapping each key to its computed value', () => {
    expect(objectFromKeys(['a', 'bb'], (key) => key.length)).toStrictEqual({a: 1, bb: 2});
  });

  it('passes the index to the mapper', () => {
    expect(objectFromKeys(['x', 'y'], (key, index) => `${key}${index}`)).toStrictEqual({
      x: 'x0',
      y: 'y1',
    });
  });
});
