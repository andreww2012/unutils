type Comparator<T> = (a: T, b: T) => boolean;

// Same convention as the other array utilities: a binary function is a comparator
const isComparator = <T>(fn: Comparator<T> | ((value: T) => unknown)): fn is Comparator<T> =>
  fn.length === 2;

/**
 * Collects the elements of `array` that repeat an earlier one, one per repeated
 * value, stopping once `limit` of them are found
 */
export const findDuplicates = <T>(
  array: readonly T[],
  fn: Comparator<T> | ((value: T) => unknown) | undefined,
  limit: number,
) => {
  const firstOccurrences: T[] = [];
  const getKey: (item: T) => unknown =
    fn && isComparator(fn)
      ? (item) => {
          // An index, as elements the comparator considers different can still be the same value
          const index = firstOccurrences.findIndex((firstOccurrence) => fn(firstOccurrence, item));
          if (index === -1) {
            firstOccurrences.push(item);
            return firstOccurrences.length - 1;
          }

          return index;
        }
      : (item) => (fn ? fn(item) : item);

  const duplicates: T[] = [];
  // Whether a duplicate of the key was already reported
  const seenKeys = new Map<unknown, boolean>();

  for (const item of array) {
    if (duplicates.length >= limit) {
      break;
    }

    const key = getKey(item);
    const isReported = seenKeys.get(key);
    if (isReported == null) {
      seenKeys.set(key, false);
    } else if (!isReported) {
      seenKeys.set(key, true);
      duplicates.push(item);
    }
  }

  return duplicates;
};
