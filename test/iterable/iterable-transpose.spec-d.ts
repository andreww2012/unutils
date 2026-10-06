import {iterableTranspose} from '../../src/iterable/iterable-transpose.ts';

describe('iterable/iterableTranspose', () => {
  it('infers the tuple type', () => {
    expectTypeOf(iterableTranspose([[1], new Set(['a'])])).toEqualTypeOf<
      IteratorObject<[number, string], undefined>
    >();
  });
});
