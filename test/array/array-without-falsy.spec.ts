import {arrayWithoutFalsy} from '../../src/array/array-without-falsy.ts';

describe('array/arrayWithoutFalsy', () => {
  it('basic test', () => {
    expect(arrayWithoutFalsy([1, null, 2, undefined, false, 3, ''])).toStrictEqual([1, 2, 3]);
  });
});
