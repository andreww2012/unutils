import {stringifyAsync} from 'yieldable-json';

// yieldable-json's `stringifyAsync` argument parser is buggy: when both `space` and
// `intensity` are supplied it advances its index one slot too far and reads `space` from
// the `intensity` position (see its index.js), so neither lands correctly. Passing a
// throwaway numeric arg at index 2 shifts our real `space`/`intensity` into the slots its
// parser actually reads. This 6-arg form is off-spec, hence the cast to call it.
const stringifyWithSpaceAndIntensity = stringifyAsync as unknown as (
  value: unknown,
  replacer: unknown,
  parserSlotPadding: number,
  space: number | string,
  intensity: number,
  callback: (error: Error | null, result: string) => void,
) => void;

/**
 * Asynchronous, non-blocking `JSON.stringify`: serializes `value` while
 * periodically yielding to the event loop, so large payloads don't starve it.
 * Promisified and typed.
 * @param value - The value to serialize.
 * @param replacer - Optional `JSON.stringify` replacer function or allow-list array.
 * @param space - Optional indentation (number of spaces or a string), as in `JSON.stringify`.
 * @param intensity - Work done per iteration before yielding, `1`–`32` (default `1`); higher trades responsiveness for throughput.
 * @returns A promise resolving to the JSON string.
 * @example
 * // Serialize a large payload without blocking the event loop
 * await jsonStringifyAsync({a: 1, b: [2, 3]});
 * // '{"a":1,"b":[2,3]}'
 * @example
 * // Pretty-print with 2-space indentation
 * await jsonStringifyAsync({a: 1}, null, 2);
 * // '{\n  "a": 1\n}'
 */
export const jsonStringifyAsync = (
  value: object,
  replacer: ((key: string, value: unknown) => unknown) | (number | string)[] | null = null,
  space: number | string = 0,
  intensity = 1,
): Promise<string> =>
  new Promise<string>((resolve, reject) => {
    stringifyWithSpaceAndIntensity(value, replacer, 0, space, intensity, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
