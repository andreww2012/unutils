import {structuredParse} from '../../src/json/structured-parse.ts';
import {
  StructuredStringifyError,
  structuredStringify,
} from '../../src/json/structured-stringify.ts';

const narrowToStructuredStringifyError = (error: unknown) =>
  error instanceof StructuredStringifyError ? error : undefined;

describe('json/StructuredStringifyError', () => {
  it('narrows via `instanceof`', () => {
    expectTypeOf(narrowToStructuredStringifyError).returns.toEqualTypeOf<
      StructuredStringifyError | undefined
    >();
  });

  it('has `unknown` values', () => {
    expectTypeOf<StructuredStringifyError['path']>().toEqualTypeOf<string>();
    expectTypeOf<StructuredStringifyError['value']>().toEqualTypeOf<unknown>();
    expectTypeOf<StructuredStringifyError['root']>().toEqualTypeOf<unknown>();
  });
});

describe('json/structuredParse', () => {
  it('returns `unknown`', () => {
    expectTypeOf(structuredParse(structuredStringify(1))).toEqualTypeOf<unknown>();
  });
});
