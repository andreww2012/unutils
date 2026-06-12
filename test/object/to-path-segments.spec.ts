import {toPathSegments} from '../../src/object/to-path-segments.ts';

describe('object/toPathSegments', () => {
  it('basic test', () => {
    expect(toPathSegments('a.b[0].c')).toStrictEqual(['a', 'b', '0', 'c']);
  });
});
