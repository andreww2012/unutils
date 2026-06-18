import {randomIntExclusive} from '../../src/math/random-int-exclusive.ts';

describe('math/randomIntExclusive', () => {
  it('narrows to the exclusive literal union for small literal bounds', () => {
    expectTypeOf(randomIntExclusive(1, 4)).toEqualTypeOf<1 | 2 | 3>();
  });

  it('ranges over [0, maximum) for a single argument', () => {
    expectTypeOf(randomIntExclusive(3)).toEqualTypeOf<0 | 1 | 2>();
  });

  it('widens to number for non-literal bounds', () => {
    expectTypeOf(randomIntExclusive(1 as number, 4)).toEqualTypeOf<number>();
  });
});
