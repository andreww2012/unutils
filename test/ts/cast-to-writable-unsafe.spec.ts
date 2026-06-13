import {castToWritableUnsafe} from '../../src/ts/cast-to-writable-unsafe.ts';

describe('ts/castToWritableUnsafe', () => {
  it('basic test', () => {
    const point = {x: 1, y: 2} as const;

    expect(castToWritableUnsafe(point)).toBe(point);
  });
});
