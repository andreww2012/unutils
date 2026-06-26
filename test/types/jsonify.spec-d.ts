import type {Jsonify} from '../../src/types/jsonify.ts';

describe('types/Jsonify', () => {
  it('basic test', () => {
    expectTypeOf<Jsonify<{a: Date}>>().toEqualTypeOf<{a: string}>();
  });
});
