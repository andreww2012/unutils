import {setHas} from '../../src/set/set-has.ts';

describe('set/setHas', () => {
  it('basic test', () => {
    const set = new Set(['a', 'b', 'c']);

    expect(setHas(set, 'a')).toBe(true);
    expect(setHas(set, 'z')).toBe(false);
  });
});
