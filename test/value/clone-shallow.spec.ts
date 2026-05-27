import {cloneShallow} from '../../src/value/clone-shallow.ts';

describe('value/cloneShallow', () => {
  it('basic test', () => {
    const source = {a: 1, b: {c: 2}};
    const cloned = cloneShallow(source);

    expect(cloned).toStrictEqual(source);
    expect(cloned).not.toBe(source);
    expect(cloned.b).toBe(source.b);
  });
});
