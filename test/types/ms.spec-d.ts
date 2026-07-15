import type {Ms} from '../../src/types/ms.ts';

describe('types/Ms', () => {
  it('converts duration strings to milliseconds', () => {
    expectTypeOf<Ms<'1ms'>>().toEqualTypeOf<1>();
    expectTypeOf<Ms<'1s'>>().toEqualTypeOf<1000>();
    expectTypeOf<Ms<'42m'>>().toEqualTypeOf<2_520_000>();
    expectTypeOf<Ms<'1h'>>().toEqualTypeOf<3_600_000>();
    expectTypeOf<Ms<'1d'>>().toEqualTypeOf<86_400_000>();
    expectTypeOf<Ms<'1w'>>().toEqualTypeOf<604_800_000>();
    expectTypeOf<Ms<'1y'>>().toEqualTypeOf<31_557_600_000>();
  });

  it('supports aliases, negatives, floats, and whitespace', () => {
    expectTypeOf<Ms<'1 seconds'>>().toEqualTypeOf<1000>();
    expectTypeOf<Ms<'1 hour'>>().toEqualTypeOf<3_600_000>();
    expectTypeOf<Ms<'-42s'>>().toEqualTypeOf<-42_000>();
    expectTypeOf<Ms<'3.14d'>>().toEqualTypeOf<271_296_000>();
    // eslint-disable-next-line un/no-multiple-consecutive-spaces -- intentional: exercises whitespace trimming
    expectTypeOf<Ms<'  010ms  '>>().toEqualTypeOf<10>();
  });

  it('resolves invalid inputs to `never`', () => {
    expectTypeOf<Ms<'s'>>().toEqualTypeOf<never>();
    expectTypeOf<Ms<'--42ms'>>().toEqualTypeOf<never>();
    expectTypeOf<Ms<'42mss'>>().toEqualTypeOf<never>();
  });
});
