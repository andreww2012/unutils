import {iterableFirst} from '../../src/iterable/iterable-first.ts';

describe('iterable/iterableFirst', () => {
  it('returns the first element', () => {
    expect(iterableFirst(new Set(['a', 'b']))).toBe('a');
  });

  it('returns `undefined` for an empty iterable', () => {
    expect(iterableFirst<string>([])).toBeUndefined();
  });

  it('closes the iterator', () => {
    let isClosed = false;
    const generate = function* () {
      try {
        yield 1;
        yield 2;
      } finally {
        isClosed = true;
      }
    };

    expect(iterableFirst(generate())).toBe(1);
    expect(isClosed).toBe(true);
  });
});
