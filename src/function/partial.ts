import {partial as esPartial, partialRight as esPartialRight} from 'es-toolkit/function';

const callPartial = (
  func: (...args: never[]) => unknown,
  args: readonly unknown[],
  isFromRight: boolean,
) => {
  if (isFromRight) {
    const remapped = args.map((arg) =>
      arg === esPartial.placeholder ? esPartialRight.placeholder : arg,
    );

    return esPartialRight(func, ...remapped);
  }

  return esPartial(func, ...args);
};

interface PartialFn {
  <F extends (...args: never[]) => unknown>(
    func: F,
    args: readonly unknown[],
    isFromRight?: boolean,
  ): (...remaining: unknown[]) => ReturnType<F>;

  placeholder: typeof esPartial.placeholder;
}

/**
 * Creates a function with some leading or trailing arguments pre-applied.
 * The returned function only needs the remaining arguments at call time.
 * @param func - The function to partially apply.
 * @param args - An array of arguments to pre-apply. Use `partial.placeholder`
 * inside the array to skip a position so the caller supplies it. The same
 * placeholder symbol works for both left and right modes.
 * @param isFromRight - When `true`, `args` are applied to the rightmost
 * parameters of `func` and the returned function fills the leading ones.
 * Defaults to `false`.
 * @returns A function awaiting the remaining arguments.
 * @example
 * // Pre-apply leading arguments
 * const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
 * const sayHi = partial(greet, ['Hi']);
 * sayHi('Alice');
 * // 'Hi, Alice!'
 * @example
 * // Pre-apply trailing arguments
 * const sayToAlice = partial(greet, ['Alice'], true);
 * sayToAlice('Hello');
 * // 'Hello, Alice!'
 * @example
 * // Placeholders skip a position so a later argument supplies it
 * const concatThree = (a: string, b: string, c: string) => `${a}-${b}-${c}`;
 * const partialWithGap = partial(concatThree, [partial.placeholder, 'mid']);
 * partialWithGap('start', 'end');
 * // 'start-mid-end'
 */
export const partial: PartialFn = Object.assign(
  ((func: never, args: readonly unknown[], isFromRight = false) =>
    callPartial(func, args, isFromRight)) as PartialFn,
  {placeholder: esPartial.placeholder},
);
