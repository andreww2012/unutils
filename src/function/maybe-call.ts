/**
 * A value that is either provided directly or produced lazily by a function.
 * Handy for options that accept "a value or a getter", letting callers defer
 * the computation (or react to arguments) without forcing every caller to pass
 * a function.
 */
export type MaybeFn<Return, Params extends readonly unknown[] = []> =
  ((...args: Params) => Return) | Return;

/**
 * Resolves a {@link MaybeFn}: if `fnOrValue` is a function, calls it with the
 * provided `args` and returns its result; otherwise returns `fnOrValue` as-is.
 * The return type is inferred as the value type or the function's return type
 * accordingly, and `args` are only expected (and type-checked) when the input
 * is a function.
 * @param fnOrValue - Either a plain value or a function producing the value.
 * @param args - Arguments forwarded to `fnOrValue` when it is a function. Ignored otherwise.
 * @returns The plain value, or the result of calling the function with `args`.
 * @example
 * maybeCall(42);
 * // 42
 * @example
 * maybeCall(() => 42);
 * // 42
 * @example
 * // Arguments are forwarded to the function form
 * maybeCall((a: number, b: number) => a + b, 2, 3);
 * // 5
 * @example
 * // Resolving a "value or getter" option
 * const resolveDefault = (fallback: MaybeFn<string>) => maybeCall(fallback);
 * resolveDefault('static');     // 'static'
 * resolveDefault(() => 'lazy'); // 'lazy'
 */
export const maybeCall = <
  Value extends MaybeFn<unknown>,
  Args extends readonly unknown[] = Value extends (...args: infer Params) => unknown ? Params : [],
>(
  fnOrValue: Value,
  ...args: NoInfer<Args>
) =>
  // eslint-disable-next-line ts/no-unsafe-call -- the runtime check guarantees `fnOrValue` is callable here
  (typeof fnOrValue === 'function' ? fnOrValue(...args) : fnOrValue) as Value extends (
    ...args: never[]
  ) => infer Return
    ? Return
    : Value;
