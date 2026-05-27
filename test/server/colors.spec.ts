import {colors} from '../../src/server/colors.ts';

describe('server/colors', () => {
  it('basic test', () => {
    expect(colors.red).toBeTypeOf('function');
    expect(colors.red('hi')).toContain('hi');
  });
});
