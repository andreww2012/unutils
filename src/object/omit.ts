import {omit as omitKeys} from 'es-toolkit/compat';
import {omitBy} from 'es-toolkit/object';

/**
 * Creates a new object with the selected properties of `object` removed.
 *
 * The selection can be made in three ways via the second argument:
 *
 * - An array of top-level keys — precisely typed as `Omit<T, K>`.
 * - An array of deep path strings like `'a.b.c'` — removes nested properties
 *   (typed loosely as `Partial<T>`).
 * - A `(value, key) => boolean` predicate — removes the properties for which it
 *   returns `true` (delegates to `omitBy`).
 * @param object - The source object. Not mutated.
 * @param keys - The keys/paths to remove, or a `(value, key) => boolean` predicate selecting them.
 * @returns A new object without the selected properties.
 * @example
 * // Top-level keys (precisely typed)
 * omit({a: 1, b: 2, c: 3}, ['b', 'c']);
 * // {a: 1}
 * @example
 * // Deep path strings
 * omit({a: {b: 1, c: 2}}, ['a.b']);
 * // {a: {c: 2}}
 * @example
 * // With a predicate — remove string-valued properties
 * omit({a: 1, b: 'drop', c: 3}, (value) => typeof value === 'string');
 * // {a: 1, c: 3}
 */
export function omit<T extends object, K extends keyof T>(
  object: T,
  keys: readonly K[],
): Omit<T, K>;
export function omit<T extends object>(
  object: T,
  selector: readonly PropertyKey[] | ((value: T[keyof T], key: keyof T) => boolean),
): Partial<T>;
export function omit<T extends object>(
  object: T,
  selector: readonly PropertyKey[] | ((value: T[keyof T], key: keyof T) => boolean),
): Partial<T> {
  if (typeof selector === 'function') {
    return omitBy(object, selector);
  }

  return omitKeys(object, [...selector]);
}
