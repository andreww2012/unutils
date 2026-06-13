import {castToSafe} from '../../src/ts/cast-to-safe.ts';

describe('ts/castToSafe', () => {
  it('basic test', () => {
    const object = {a: 1};

    expect(castToSafe(object)).toBe(object);
    expect(castToSafe(123)).toBe(123);
  });
});
