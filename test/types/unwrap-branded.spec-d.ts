import type {Branded} from '../../src/types/index.ts';
import type {UnwrapBranded} from '../../src/types/unwrap-branded.ts';

describe('types/UnwrapBranded', () => {
  it('basic test', () => {
    expectTypeOf<UnwrapBranded<Branded<number, 'Id'>>>().toEqualTypeOf<number>();
  });
});
