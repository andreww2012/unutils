import type {AbstractClass} from '../../src/types/abstract-class.ts';

abstract class SampleAbstractClass {
  abstract value: number;
}
describe('types/AbstractClass', () => {
  it('basic test', () => {
    expectTypeOf<
      typeof SampleAbstractClass extends AbstractClass<SampleAbstractClass> ? true : false
    >().toEqualTypeOf<true>();
  });
});
