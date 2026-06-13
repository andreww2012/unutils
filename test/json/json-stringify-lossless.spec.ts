import {jsonStringifyLossless} from '../../src/json/json-stringify-lossless.ts';

describe('json/jsonStringifyLossless', () => {
  it('basic test', () => {
    expect(jsonStringifyLossless({big: 12345678901234567890n})).toBe(
      '{"big":12345678901234567890}',
    );
  });
});
