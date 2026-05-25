import {at} from 'es-toolkit';

export function arrayAtMulti<T>(array: readonly T[], indices: number[]): T[];
export function arrayAtMulti<T>(array: readonly T[], indices: number): T | undefined;
export function arrayAtMulti<T>(
  array: readonly T[],
  indices: number | number[],
): T | T[] | undefined {
  if (Array.isArray(indices)) {
    return at(array, indices);
  }

  return at(array, [indices])[0];
}
