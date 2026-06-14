import {maybeCall} from '../../src/function/maybe-call.ts';

const resolveDefault = (fallback: number | (() => number)) => maybeCall(fallback);

const innerFunction = () => 1;

describe('function/maybeCall', () => {
  it('returns a plain value as-is', () => {
    expect(maybeCall(42)).toBe(42);
    expect(maybeCall('hello')).toBe('hello');

    const object = {a: 1};

    expect(maybeCall(object)).toBe(object);
  });

  it('calls a function and returns its result', () => {
    expect(maybeCall(() => 42)).toBe(42);
  });

  it('forwards arguments to the function form', () => {
    expect(maybeCall((a: number, b: number) => a + b, 2, 3)).toBe(5);
  });

  it('returns falsy and nullish values as-is rather than treating them as missing', () => {
    expect(maybeCall(0)).toBe(0);
    expect(maybeCall('')).toBe('');
    expect(maybeCall(false)).toBe(false);
    expect(maybeCall(null)).toBeNull();
    expect(maybeCall(Number.NaN)).toBeNaN();
    // eslint-disable-next-line ts/no-confusing-void-expression -- the typed-lint rule misreads this result as `void`; it resolves to `undefined`
    expect(maybeCall(undefined)).toBeUndefined();
  });

  it('calls the function exactly once, returning its (callable) result without calling it again', () => {
    let calls = 0;
    const result = maybeCall(() => {
      calls += 1;
      return innerFunction;
    });

    expect(calls).toBe(1);
    expect(result).toBe(innerFunction);
  });

  it('resolves a "value or getter" option', () => {
    expect(resolveDefault(7)).toBe(7);
    expect(resolveDefault(() => 9)).toBe(9);
  });
});
