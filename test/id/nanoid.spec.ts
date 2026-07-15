import {nanoid} from '../../src/id/nanoid.ts';

const URL_SAFE = /^[\w-]+$/;

describe('id/nanoid', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('generates a 21-symbol URL-safe ID by default', () => {
    const id = nanoid();

    expect(id).toHaveLength(21);
    expect(id).toMatch(URL_SAFE);
  });

  it('respects a custom size', () => {
    expect(nanoid(10)).toHaveLength(10);
    expect(nanoid(0)).toBe('');
  });

  it('produces distinct IDs across many runs', () => {
    const ids = new Set(Array.from({length: 1000}, () => nanoid()));

    expect(ids.size).toBe(1000);
  });

  it('uses a Math.random source when insecure', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);

    const id = nanoid(5, {insecure: true});

    expect(id).toHaveLength(5);
    expect(id).toMatch(URL_SAFE);
    expect(spy).toHaveBeenCalled();
  });

  it('does not touch Math.random by default (secure)', () => {
    const spy = vi.spyOn(Math, 'random');

    nanoid(5);
    nanoid(5, {insecure: false});

    expect(spy).not.toHaveBeenCalled();
  });
});
