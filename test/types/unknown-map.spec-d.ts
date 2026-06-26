import type {UnknownMap} from '../../src/types/unknown-map.ts';

describe('types/UnknownMap', () => {
  it('basic test', () => {
    expectTypeOf<Map<string, number> extends UnknownMap ? true : false>().toEqualTypeOf<true>();
  });
});
