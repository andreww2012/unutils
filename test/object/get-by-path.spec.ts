import {getByPath} from '../../src/object/get-by-path.ts';

describe('object/getByPath', () => {
  it('basic test', () => {
    expect(getByPath({a: {b: {c: 1}}}, 'a.b.c')).toBe(1);
    expect(getByPath({a: 1}, 'b', 'fallback')).toBe('fallback');
  });
});
