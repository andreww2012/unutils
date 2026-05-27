import {invariant} from '../../src/misc/invariant.ts';

describe('misc/invariant', () => {
  it('basic test', () => {
    const truthy: unknown = 1;
    const falsy: unknown = 0;

    expect(() => invariant(truthy, 'should not throw')).not.toThrow();
    expect(() => invariant(falsy, 'boom')).toThrow('boom');
  });
});
