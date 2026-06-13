import {NumberLossless} from '../../src/json/index.ts';
import {jsonParseLossless} from '../../src/json/json-parse-lossless.ts';

describe('json/jsonParseLossless', () => {
  it('basic test', () => {
    const parsed = jsonParseLossless('{"big": 12345678901234567890}') as {big: NumberLossless};

    expect(parsed.big).toBeInstanceOf(NumberLossless);
    expect(parsed.big.toString()).toBe('12345678901234567890');
  });
});
