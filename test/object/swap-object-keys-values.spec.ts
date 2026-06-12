import {swapObjectKeysValues} from '../../src/object/swap-object-keys-values.ts';

describe('object/swapObjectKeysValues', () => {
  it('swaps keys and values', () => {
    expect(swapObjectKeysValues({a: 'x', b: 'y'})).toStrictEqual({x: 'a', y: 'b'});
  });

  it('keeps the last key on a value collision', () => {
    expect(swapObjectKeysValues({a: '1', b: '1'})).toStrictEqual({1: 'b'});
  });

  it('groups colliding keys into arrays with an iteratee', () => {
    expect(swapObjectKeysValues({a: 1, b: 2, c: 1}, (value) => `n${value}`)).toStrictEqual({
      n1: ['a', 'c'],
      n2: ['b'],
    });
  });
});
