import {NANOID_URL_ALPHABET, nanoidFactory} from '../../src/id/nanoid-factory.ts';

const ABC = /^[abc]+$/;
const A_TO_F = /^[a-f]+$/;
const URL_SAFE = /^[\w-]+$/;

describe('id/nanoidFactory', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('generates IDs over the custom alphabet with the default size', () => {
    const generate = nanoidFactory('abc', 8);
    const id = generate();

    expect(id).toHaveLength(8);
    expect(id).toMatch(ABC);
  });

  it('lets the returned generator override the size', () => {
    const generate = nanoidFactory('abc', 8);

    expect(generate(3)).toHaveLength(3);
    expect(generate(0)).toBe('');
  });

  it('uses a Math.random source when insecure', () => {
    const spy = vi.spyOn(Math, 'random').mockReturnValue(0);
    const generate = nanoidFactory('xyz', 6, {insecure: true});

    const id = generate();

    expect(id).toBe('xxxxxx');
    expect(spy).toHaveBeenCalled();
  });

  it('draws from a provided random source, ignoring insecure', () => {
    const random = vi.fn<(bytes: number) => Uint8Array>((bytes) => new Uint8Array(bytes));
    const generate = nanoidFactory('abcdef', 5, {random, insecure: true});

    const id = generate();

    expect(id).toHaveLength(5);
    expect(id).toMatch(A_TO_F);
    expect(random).toHaveBeenCalled();
  });
});

describe('id/NANOID_URL_ALPHABET', () => {
  it('is the 64-symbol URL-safe alphabet', () => {
    expect(NANOID_URL_ALPHABET).toHaveLength(64);
    expect(NANOID_URL_ALPHABET).toMatch(URL_SAFE);
    expect(new Set(NANOID_URL_ALPHABET).size).toBe(64);
  });
});
