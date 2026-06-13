import {arrayConcat} from '../../src/array/array-concat.ts';

describe('array/arrayConcat', () => {
  it('basic test', () => {
    expect(arrayConcat(['a', 'b'], [1, 2])).toStrictEqual(['a', 'b', 1, 2]);
  });
});
