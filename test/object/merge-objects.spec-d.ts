import {mergeObjects} from '../../src/object/merge-objects.ts';

describe('object/mergeObjects', () => {
  it('produces the precise merged type of heterogeneous objects', () => {
    expectTypeOf(mergeObjects([{a: 1}, {b: 'x'}])).toEqualTypeOf<{a: number; b: string}>();
  });
});
