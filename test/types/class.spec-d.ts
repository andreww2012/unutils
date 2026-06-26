import type {Class} from '../../src/types/class.ts';

class SampleClass {
  value = 1;
}
describe('types/Class', () => {
  it('basic test', () => {
    expectTypeOf<
      typeof SampleClass extends Class<SampleClass> ? true : false
    >().toEqualTypeOf<true>();
  });
});
