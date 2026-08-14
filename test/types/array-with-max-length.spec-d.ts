import type {ArrayWithMaxLength} from '../../src/types/array-with-max-length.ts';

describe('types/ArrayWithMaxLength', () => {
  it('expands a regular array into every length up to the maximum', () => {
    expectTypeOf<ArrayWithMaxLength<number[], 2>>().toEqualTypeOf<
      [] | [number] | [number, number]
    >();
  });

  it('keeps the element type of each position', () => {
    expectTypeOf<ArrayWithMaxLength<[string, ...number[]], 2>>().toEqualTypeOf<
      [string] | [string, number]
    >();
  });

  it('leaves a tuple that already fits untouched', () => {
    expectTypeOf<ArrayWithMaxLength<[string, number], 3>>().toEqualTypeOf<[string, number]>();
  });

  it('resolves to never when the required elements alone exceed the maximum', () => {
    expectTypeOf<ArrayWithMaxLength<[string, number, boolean], 2>>().toBeNever();
  });

  it('treats optional elements as stopping points', () => {
    expectTypeOf<ArrayWithMaxLength<[string?], 2>>().toEqualTypeOf<[] | [string]>();
  });

  it('yields only the empty tuple for a maximum of 0', () => {
    expectTypeOf<ArrayWithMaxLength<number[], 0>>().toEqualTypeOf<[]>();
  });

  it('handles an empty tuple input', () => {
    expectTypeOf<ArrayWithMaxLength<[], 3>>().toEqualTypeOf<[]>();
  });

  it('preserves readonly across every member of the union', () => {
    expectTypeOf<ArrayWithMaxLength<readonly number[], 2>>().toEqualTypeOf<
      readonly [] | readonly [number] | readonly [number, number]
    >();
    expectTypeOf<ArrayWithMaxLength<readonly [string, ...number[]], 2>>().toEqualTypeOf<
      readonly [string] | readonly [string, number]
    >();
  });

  it('constrains nothing for a non-literal maximum', () => {
    expectTypeOf<ArrayWithMaxLength<number[], number>>().toEqualTypeOf<number[]>();
  });

  it('stays within the instantiation budget well past any practical maximum', () => {
    expectTypeOf<ArrayWithMaxLength<number[], 150>>().not.toBeNever();
  });
});
