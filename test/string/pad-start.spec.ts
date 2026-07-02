import {padStart} from '../../src/string/pad-start.ts';

describe('string/padStart', () => {
  it('pads the start of the string up to the target length', () => {
    expect(padStart('5', 3, '0')).toBe('005');
  });
});
