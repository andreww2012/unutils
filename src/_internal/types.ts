/**
 * Recursively unwraps a (possibly deeply) nested array type to its innermost
 * element type — e.g. `ExtractNestedArrayType<number[][]>` is `number`.
 */
export type ExtractNestedArrayType<T> = T extends readonly (infer U)[]
  ? ExtractNestedArrayType<U>
  : T;
