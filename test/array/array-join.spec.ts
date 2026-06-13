import {arrayJoin} from '../../src/array/array-join.ts';

describe('array/arrayJoin', () => {
  it('basic test', () => {
    expect(arrayJoin(['a', 'b', 'c'], '-')).toBe('a-b-c');
  });
});
