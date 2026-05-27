import {identity} from '../../src/function/identity.ts';

describe('function/identity', () => {
  it('basic test', () => {
    expect(identity(42)).toBe(42);
    expect(identity('hello')).toBe('hello');

    const object = {a: 1};

    expect(identity(object)).toBe(object);
  });
});
