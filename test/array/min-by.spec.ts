import {minBy} from '../../src/array/min-by.ts';

describe('array/minBy', () => {
  it('basic test', () => {
    expect(minBy([{a: 1}, {a: 3}, {a: 2}], (item) => item.a)).toStrictEqual({a: 1});
  });
});
