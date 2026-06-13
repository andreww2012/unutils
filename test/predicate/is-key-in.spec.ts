import {isKeyIn} from '../../src/predicate/is-key-in.ts';

describe('predicate/isKeyIn', () => {
  it('basic test', () => {
    const object = {foo: 1, bar: 2};
    const presentKey = 'foo' as string;
    const missingKey = 'baz' as string;

    expect(isKeyIn(presentKey, object)).toBe(true);
    expect(isKeyIn(missingKey, object)).toBe(false);
  });
});
