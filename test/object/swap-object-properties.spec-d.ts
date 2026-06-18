import {swapObjectProperties} from '../../src/object/swap-object-properties.ts';

describe('object/swapObjectProperties', () => {
  it('swaps the value types of the two keys', () => {
    expectTypeOf(swapObjectProperties({a: 1, b: 'x'}, 'a', 'b')).toEqualTypeOf<{
      a: string;
      b: number;
    }>();
  });
});
