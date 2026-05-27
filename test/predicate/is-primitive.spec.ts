import {isPrimitive} from '../../src/predicate/is-primitive.ts';

describe('predicate/isPrimitive', () => {
  it('basic test', () => {
    const nullValue: unknown = null;
    const undefinedValue: unknown = undefined;
    const stringValue: unknown = 'text';
    const numberValue: unknown = 123;
    const object: unknown = {};
    const array: unknown = [];

    expect(isPrimitive(nullValue)).toBe(true);
    expect(isPrimitive(undefinedValue)).toBe(true);
    expect(isPrimitive(stringValue)).toBe(true);
    expect(isPrimitive(numberValue)).toBe(true);
    expect(isPrimitive(object)).toBe(false);
    expect(isPrimitive(array)).toBe(false);
  });
});
