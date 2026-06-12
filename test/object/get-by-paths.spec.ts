import {getByPaths} from '../../src/object/get-by-paths.ts';

describe('object/getByPaths', () => {
  it('basic test', () => {
    expect(getByPaths({a: 1, b: {c: 2}}, ['a', 'b.c'])).toStrictEqual([1, 2]);
  });
});
