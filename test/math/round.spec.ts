import {round} from '../../src/math/round.ts';

describe('math/round', () => {
  it('basic test', () => {
    expect(round(1.2345, 2)).toBe(1.23);
  });
});
