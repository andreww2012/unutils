import type {UnknownRecord} from '../../src/types/unknown-record.ts';

describe('types/UnknownRecord', () => {
  it('basic test', () => {
    expectTypeOf<{a: 1} extends UnknownRecord ? true : false>().toEqualTypeOf<true>();
  });
});
