import type {TupleToObject} from '../../src/types/tuple-to-object.ts';

describe('types/TupleToObject', () => {
  it('basic test', () => {
    expectTypeOf<TupleToObject<['a', 'b']>>().toEqualTypeOf<{0: 'a'; 1: 'b'}>();
  });
});
