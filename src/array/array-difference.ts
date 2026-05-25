import {differenceBy, differenceWith} from 'es-toolkit/array';

export function arrayDifference<T>(firstArray: readonly T[], secondArray: readonly T[]): T[];
export function arrayDifference<T, U>(
  firstArray: readonly T[],
  secondArray: readonly U[],
  areItemsEqual: (x: T, y: U) => boolean,
): T[];
export function arrayDifference<T, U>(
  firstArray: readonly T[],
  secondArray: readonly U[],
  // eslint-disable-next-line ts/unified-signatures -- merging signatures results in less strict type inference for the provided function
  mapper: (value: T | U) => unknown,
): T[];
export function arrayDifference<T>(
  firstArray: readonly T[],
  secondArray: readonly unknown[],
  fn?: ((value: unknown) => unknown) | ((x: T, y: unknown) => boolean),
): T[] {
  if (!fn) {
    const secondSet = new Set(secondArray);
    return firstArray.filter((item) => !secondSet.has(item));
  }

  if (fn.length === 2) {
    return differenceWith(firstArray, secondArray, fn as (x: T, y: unknown) => boolean);
  }

  return differenceBy(firstArray, secondArray, fn as (value: unknown) => unknown);
}
