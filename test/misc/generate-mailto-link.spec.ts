import {generateMailtoLink} from '../../src/misc/generate-mailto-link.ts';

describe('misc/generateMailtoLink', () => {
  it('places a single recipient in the path', () => {
    expect(generateMailtoLink({to: 'ada@example.com'})).toBe('mailto:ada@example.com');
  });

  it('comma-joins multiple recipients in the path, unencoded', () => {
    expect(generateMailtoLink({to: ['a@example.com', 'b@example.com']})).toBe(
      'mailto:a@example.com,b@example.com',
    );
  });

  it('percent-encodes the subject and body with %20 for spaces', () => {
    expect(generateMailtoLink({to: 'ada@example.com', subject: 'Hi there', body: 'A & B'})).toBe(
      'mailto:ada@example.com?subject=Hi%20there&body=A%20%26%20B',
    );
  });

  it('encodes cc and bcc query parameters', () => {
    expect(
      generateMailtoLink({to: 'a@example.com', cc: 'c@example.com', bcc: 'd@example.com'}),
    ).toBe('mailto:a@example.com?cc=c%40example.com&bcc=d%40example.com');
  });

  it('emits recipients as a query parameter when opted in', () => {
    expect(
      generateMailtoLink({to: ['a@example.com', 'b@example.com'], recipientsAsQueryParam: true}),
    ).toBe('mailto:?to=a%40example.com%2Cb%40example.com');
  });

  it('drops empty recipient entries', () => {
    expect(generateMailtoLink({to: ['a@example.com', '']})).toBe('mailto:a@example.com');
  });

  it('returns a bare mailto: with no fields', () => {
    expect(generateMailtoLink({})).toBe('mailto:');
  });

  it('omits recipients from the path when none are given but keeps other params', () => {
    expect(generateMailtoLink({subject: 'Hello'})).toBe('mailto:?subject=Hello');
  });
});
