/**
 * A value or a readonly array of such values: `T | readonly T[]`.
 *
 * Unlike `MaybeArray`, it also accepts readonly arrays and tuples (like `as const` literals), so
 * it fits parameters and options that only read the array.
 * To tell the two cases apart, use `isArray`: unlike `Array.isArray`, it narrows this type in
 * both branches.
 * @example
 * const watch = (paths: MaybeReadonlyArray<string>) => {
 *   const list = isArray(paths) ? paths : [paths]; // readonly string[]
 *   // ...
 * };
 *
 * watch('src');
 * watch(['src', 'test'] as const); // an error with `MaybeArray<string>`
 */
export type MaybeReadonlyArray<T> = T | readonly T[];
