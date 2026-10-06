import type {Jsonify} from '../../src/types/jsonify.ts';

describe('types/Jsonify', () => {
  it('basic test', () => {
    expectTypeOf<Jsonify<{a: Date}>>().toEqualTypeOf<{a: string}>();
  });

  it('does not add undefined to the keys of an object with optional properties', () => {
    expectTypeOf<keyof Jsonify<{a: string; b?: string}>>().toEqualTypeOf<'a' | 'b'>();
  });
});
