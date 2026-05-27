import {ExecError, exec} from '../../src/server/exec.ts';

describe('server/exec', () => {
  it('basic test', async () => {
    const result = await exec('echo', ['hi']);

    expect(result.stdout.trim()).toBe('hi');
    expect(ExecError).toBeTypeOf('function');
  });
});
