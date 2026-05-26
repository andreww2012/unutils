import {maxBy} from '../../src/array/max-by.ts';

describe('array/maxBy', () => {
  it('basic test', () => {
    expect(maxBy([{a: 1}, {a: 3}, {a: 2}], (item) => item.a)).toStrictEqual({a: 3});
  });
});
