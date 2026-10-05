import {structuredParse} from '../../src/json/structured-parse.ts';
import {
  STRUCTURED_STRINGIFY_DEFAULT_OPERATIONS,
  StructuredStringifyError,
  structuredFilterArrayIndexes,
  structuredStringify,
} from '../../src/json/structured-stringify.ts';

describe('json/structuredStringify', () => {
  it('basic test', () => {
    const serialized = structuredStringify(new Map([['a', 1]]));

    expect(serialized).toBeTypeOf('string');
    expect(serialized).toContain('Map');
  });

  it('throws `StructuredStringifyError` with the path to an unserializable value', () => {
    const root = {user: {greet: () => 'hi'}};

    expect(() => structuredStringify(root)).toThrow(StructuredStringifyError);
    expect(() => structuredStringify(root)).toThrow(
      expect.objectContaining({path: '.user.greet', value: root.user.greet, root}),
    );
  });

  it('applies custom operations on top of the default ones', () => {
    const serialized = structuredStringify({a: new Date(0)}, undefined, {
      operations: {
        ...STRUCTURED_STRINGIFY_DEFAULT_OPERATIONS,
        toISOString: () => '2000-01-01T00:00:00.000Z',
      },
    });

    expect(structuredParse(serialized)).toStrictEqual({a: new Date('2000-01-01T00:00:00.000Z')});
  });
});

describe('json/structuredFilterArrayIndexes', () => {
  it('keeps the leading run of array indexes', () => {
    expect(
      structuredFilterArrayIndexes(Object.keys(Object.assign(['a', 'b'], {label: 'c'}))),
    ).toStrictEqual(['0', '1']);
  });

  it('returns an empty array when there are no indexes', () => {
    expect(structuredFilterArrayIndexes(['label'])).toStrictEqual([]);
  });
});
