import {stringSplit} from '../../src/string/string-split.ts';

describe('string/stringSplit', () => {
  it('basic test', () => {
    expect(stringSplit('a-b-c', '-')).toStrictEqual(['a', 'b', 'c']);
  });
});
