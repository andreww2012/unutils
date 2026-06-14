import {typeOf} from '../../src/value/type-of.ts';

const REGEX = /regex/;

describe('value/typeOf', () => {
  it('reports primitives with their lowercase typeof result', () => {
    expect(typeOf('hello')).toBe('string');
    expect(typeOf(42)).toBe('number');
    expect(typeOf(true)).toBe('boolean');
    expect(typeOf(undefined)).toBe('undefined');
    expect(typeOf(10n)).toBe('bigint');
    expect(typeOf(Symbol('s'))).toBe('symbol');
    expect(typeOf(Math.max)).toBe('function');
  });

  it('reports null distinctly', () => {
    expect(typeOf(null)).toBe('null');
  });

  it('distinguishes object subtypes via their class tag', () => {
    expect(typeOf([])).toBe('Array');
    expect(typeOf({})).toBe('Object');
    expect(typeOf(new Date())).toBe('Date');
    expect(typeOf(new Map())).toBe('Map');
    expect(typeOf(REGEX)).toBe('RegExp');
    expect(typeOf(Promise.resolve())).toBe('Promise');
  });

  it('honors a custom Symbol.toStringTag', () => {
    expect(typeOf({[Symbol.toStringTag]: 'MyThing'})).toBe('MyThing');
  });
});
