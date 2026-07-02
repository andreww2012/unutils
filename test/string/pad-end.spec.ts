import {padEnd} from '../../src/string/pad-end.ts';

describe('string/padEnd', () => {
  it('pads the end of the string up to the target length', () => {
    expect(padEnd('5', 3, '0')).toBe('500');
  });
});
