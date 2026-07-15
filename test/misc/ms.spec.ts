import {ms} from '../../src/misc/ms.ts';

describe('misc/ms', () => {
  it('returns its argument unchanged', () => {
    expect(ms<'42m'>(2_520_000)).toBe(2_520_000);
    expect(ms<'-3.14d'>(-271_296_000)).toBe(-271_296_000);
  });
});
