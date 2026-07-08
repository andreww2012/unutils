import {styleText} from '../../src/server/style-text.ts';

describe('server/styleText', () => {
  it('basic test', () => {
    expect(styleText).toBeTypeOf('function');
    expect(styleText('red', 'hi', {validateStream: false})).toContain('hi');
  });
});
