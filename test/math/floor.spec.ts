import {floor} from '../../src/math/floor.ts';

describe('math/floor', () => {
  it('basic test', () => {
    expect(floor(4.006, 2)).toBe(4);
  });
});
