import {toWords} from '../../src/string/to-words.ts';

describe('string/toWords', () => {
  it('basic test', () => {
    expect(toWords('fred, barney, & pebbles')).toStrictEqual(['fred', 'barney', 'pebbles']);
  });
});
