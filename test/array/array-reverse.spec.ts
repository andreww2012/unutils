import {arrayReverse} from '../../src/array/array-reverse.ts';

describe('array/arrayReverse', () => {
  it('reverses the order of the elements', () => {
    expect(arrayReverse([1, 2, 3])).toStrictEqual([3, 2, 1]);
  });

  it('does not mutate the input', () => {
    const source = [1, 2, 3];
    arrayReverse(source);

    expect(source).toStrictEqual([1, 2, 3]);
  });
});
