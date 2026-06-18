import {randomIntInclusive} from '../../src/math/random-int-inclusive.ts';

describe('math/randomIntInclusive', () => {
  it('narrows to the inclusive literal union for small literal bounds', () => {
    expectTypeOf(randomIntInclusive(1, 3)).toEqualTypeOf<1 | 2 | 3>();
  });

  it('ranges from 0 inclusive for a single argument', () => {
    expectTypeOf(randomIntInclusive(2)).toEqualTypeOf<0 | 1 | 2>();
  });

  it('widens to number for non-literal bounds', () => {
    expectTypeOf(randomIntInclusive(1 as number, 3)).toEqualTypeOf<number>();
  });
});
