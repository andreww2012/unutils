import {allKeyed} from '../../src/async/all-keyed.ts';

describe('async/allKeyed', () => {
  it('basic test', async () => {
    const result = await allKeyed({
      first: Promise.resolve(1),
      second: Promise.resolve('hi'),
    });

    expect(result).toStrictEqual({first: 1, second: 'hi'});
  });
});
