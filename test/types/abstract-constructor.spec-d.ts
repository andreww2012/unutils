import type {AbstractConstructor} from '../../src/types/abstract-constructor.ts';

abstract class SampleAbstractClass {
  abstract value: number;
}
describe('types/AbstractConstructor', () => {
  it('basic test', () => {
    expectTypeOf<
      typeof SampleAbstractClass extends AbstractConstructor<SampleAbstractClass> ? true : false
    >().toEqualTypeOf<true>();
  });
});
