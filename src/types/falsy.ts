/**
 * Union of every value that coerces to `false` in a boolean context and can be
 * expressed as a literal type: `false`, `0`, `0n`, `''`, `null` and `undefined`.
 * Handy for subtracting the falsy members from a union, e.g. `Exclude<T, Falsy>`.
 *
 * `NaN` is falsy too, but it has no literal type representation and therefore
 * cannot be part of the union.
 * @example
 * type Truthy<T> = Exclude<T, Falsy>;
 *
 * type A = Truthy<0 | 1 | '' | 'a'>; // 1 | 'a'
 */
export type Falsy = false | 0 | 0n | '' | null | undefined;
