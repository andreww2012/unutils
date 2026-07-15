import {randomBytes} from '../../src/misc/random-bytes.ts';

describe('misc/randomBytes', () => {
  it('returns a Uint8Array of the requested length', () => {
    const bytes = randomBytes(16);

    expect(bytes).toBeInstanceOf(Uint8Array);
    expect(bytes).toHaveLength(16);
  });

  it('returns an empty array for a size of 0', () => {
    expect(randomBytes(0)).toHaveLength(0);
  });
});
