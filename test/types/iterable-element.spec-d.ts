import type {IterableElement} from '../../src/types/iterable-element.ts';

describe('types/IterableElement', () => {
  it('basic test', () => {
    expectTypeOf<IterableElement<Set<number>>>().toEqualTypeOf<number>();
  });
});
