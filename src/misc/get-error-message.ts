import {isPrimitive} from '../predicate/is-primitive.ts';

/**
 * Gets a human-readable message from a caught value, which can be anything,
 * since JavaScript allows throwing any value.
 *
 * - An `Error`, or any other object with a non-empty string `message` property
 *   (like an error from another realm or a parsed error response), gives its
 *   `message`.
 * - A non-empty string is returned as is.
 * - Other primitives (numbers, booleans, etc.) are converted to a string.
 * - Anything else, including `null`, `undefined` and an `Error` with an empty
 *   message, gives the `fallback`.
 * @param error - The caught value.
 * @param fallback - The message to use when `error` has no meaningful one. Defaults to `'Unknown error'`.
 * @returns The message.
 * @example
 * // Errors and error-like objects
 * getErrorMessage(new Error('Not found'));
 * // 'Not found'
 * getErrorMessage({message: 'Rate limited', code: 429});
 * // 'Rate limited'
 * @example
 * // Thrown primitives
 * getErrorMessage('Timed out');
 * // 'Timed out'
 * getErrorMessage(404);
 * // '404'
 * @example
 * // No meaningful message
 * getErrorMessage(undefined);
 * // 'Unknown error'
 * getErrorMessage({code: 'E_FAIL'}, 'Request failed');
 * // 'Request failed'
 * @example
 * // Typical usage
 * try {
 *   await saveDraft();
 * } catch (error) {
 *   showToast(`Could not save the draft: ${getErrorMessage(error)}`);
 * }
 */
export const getErrorMessage = (error: unknown, fallback = 'Unknown error') => {
  if (typeof error === 'object' && error != null) {
    return 'message' in error && typeof error.message === 'string' && error.message
      ? error.message
      : fallback;
  }

  return (isPrimitive(error) && error != null && String(error)) || fallback;
};
