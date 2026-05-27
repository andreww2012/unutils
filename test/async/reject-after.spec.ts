import {rejectAfter} from '../../src/async/reject-after.ts';

describe('async/rejectAfter', () => {
  it('basic test', async () => {
    await expect(rejectAfter(10)).rejects.toThrow();
  });
});
