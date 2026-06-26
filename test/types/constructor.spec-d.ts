import type {Constructor} from '../../src/types/constructor.ts';

class SampleClass {
  value = 1;
}
describe('types/Constructor', () => {
  it('basic test', () => {
    expectTypeOf<
      typeof SampleClass extends Constructor<SampleClass> ? true : false
    >().toEqualTypeOf<true>();
  });
});
