import {clearBit} from '../../src/bitwise/clear-bit.ts';
import {indexesOfSetBits} from '../../src/bitwise/indexes-of-set-bits.ts';
import {type BitIndex, isBitIndex} from '../../src/bitwise/is-bit-index.ts';
import {isBitSet} from '../../src/bitwise/is-bit-set.ts';
import {rotateBitsLeft} from '../../src/bitwise/rotate-bits-left.ts';
import {setBit} from '../../src/bitwise/set-bit.ts';

enum Permission {
  Read = 0,
  Edit = 2,
}

enum WideFlag {
  Overflow = 40,
}

describe('bitwise/BitIndex', () => {
  it('is the union of the integers from 0 to 31', () => {
    expectTypeOf<0>().toExtend<BitIndex>();
    expectTypeOf<31>().toExtend<BitIndex>();
    expectTypeOf<32>().not.toExtend<BitIndex>();
    expectTypeOf<-1>().not.toExtend<BitIndex>();
    expectTypeOf<number>().not.toExtend<BitIndex>();
  });

  it('is accepted by the bit utilities as literals and enum members', () => {
    expectTypeOf(isBitSet(1, 31)).toEqualTypeOf<boolean>();
    expectTypeOf(setBit(1, Permission.Edit)).toEqualTypeOf<number>();
    expectTypeOf(clearBit(1, Permission.Read)).toEqualTypeOf<number>();
  });

  it('rejects indexes out of range and plain numbers', () => {
    const dynamicIndex = Math.max(0, 1);

    // @ts-expect-error Out of range
    isBitSet(1, 32);
    // @ts-expect-error Out of range
    setBit(1, -1);
    // @ts-expect-error Not an integer
    clearBit(1, 1.5);
    // @ts-expect-error Out-of-range enum member
    setBit(1, WideFlag.Overflow);
    // @ts-expect-error Plain number
    rotateBitsLeft(1, dynamicIndex);
  });

  it('accepts a plain number narrowed with isBitIndex', () => {
    const dynamicIndex = Math.max(0, 1);

    if (!isBitIndex(dynamicIndex)) {
      return;
    }

    expectTypeOf(dynamicIndex).toEqualTypeOf<BitIndex>();
    expectTypeOf(setBit(1, dynamicIndex)).toEqualTypeOf<number>();
  });

  it('is returned by indexesOfSetBits', () => {
    expectTypeOf(indexesOfSetBits(5)).toEqualTypeOf<BitIndex[]>();
  });
});
