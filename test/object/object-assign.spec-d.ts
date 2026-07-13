import {objectAssign} from '../../src/object/object-assign.ts';

describe('object/objectAssign', () => {
  it('makes source-only keys optional', () => {
    expectTypeOf(objectAssign({a: 1}, {b: 2})).toEqualTypeOf<{a: number; b?: number}>();
  });

  it('widens overlapping keys to a union instead of collapsing to never', () => {
    expectTypeOf(objectAssign({a: 1}, {a: 'x'})).toEqualTypeOf<{a: number | string}>();
  });
});
