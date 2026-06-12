import {deleteByPath} from '../../src/object/delete-by-path.ts';

describe('object/deleteByPath', () => {
  it('basic test', () => {
    const object = {a: {b: 1}};

    expect(deleteByPath(object, 'a.b')).toBe(true);
    expect(object).toStrictEqual({a: {}});
  });
});
