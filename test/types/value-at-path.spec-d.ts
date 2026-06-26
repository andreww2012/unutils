import type {ValueAtPath} from '../../src/types/value-at-path.ts';

describe('types/ValueAtPath', () => {
  it('basic test', () => {
    expectTypeOf<ValueAtPath<{a: {b: {c: number}}}, 'a.b.c'>>().toEqualTypeOf<number>();
  });
});
