import {ceil} from '../../src/math/ceil.ts';

describe('math/ceil', () => {
  it('basic test', () => {
    expect(ceil(4.006, 2)).toBe(4.01);
  });
});
