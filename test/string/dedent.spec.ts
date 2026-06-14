import {dedent} from '../../src/string/dedent.ts';

describe('string/dedent', () => {
  it('basic test', () => {
    const name = 'world';

    expect(dedent`
      hello ${name}
      goodbye
    `).toBe('hello world\ngoodbye');
  });
});
