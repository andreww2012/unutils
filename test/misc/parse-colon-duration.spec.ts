import {formatDuration} from '../../src/misc/format-duration.ts';
import {parseColonDuration} from '../../src/misc/parse-colon-duration.ts';

describe('misc/parseColonDuration', () => {
  it('parses minutes and seconds', () => {
    expect(parseColonDuration('1:35')).toBe(95_000);
    expect(parseColonDuration('0:00')).toBe(0);
  });

  it('parses hours, minutes and seconds', () => {
    expect(parseColonDuration('1:02:03')).toBe(3_723_000);
  });

  it('parses days, hours, minutes and seconds', () => {
    expect(parseColonDuration('1:01:01:01')).toBe(90_061_000);
  });

  it('allows the first field to have any number of digits and value', () => {
    expect(parseColonDuration('90:00')).toBe(5_400_000);
    expect(parseColonDuration('25:00:00')).toBe(90_000_000);
    expect(parseColonDuration('400:00:00:00')).toBe(34_560_000_000);
    expect(parseColonDuration('01:05')).toBe(65_000);
  });

  it('parses fractional seconds without rounding errors', () => {
    expect(parseColonDuration('0:01.5')).toBe(1500);
    expect(parseColonDuration('0:00.57')).toBe(570);
    expect(parseColonDuration('0:00.123')).toBe(123);
    expect(parseColonDuration('0:00.0005')).toBe(0.5);
  });

  it('parses negative durations', () => {
    expect(parseColonDuration('-1:00')).toBe(-60_000);
    expect(parseColonDuration('-0:00')).toBe(0);
  });

  it('returns undefined for malformed input', () => {
    expect(parseColonDuration('')).toBeUndefined();
    expect(parseColonDuration('35')).toBeUndefined();
    expect(parseColonDuration('1:5')).toBeUndefined();
    expect(parseColonDuration('1:2:03')).toBeUndefined();
    expect(parseColonDuration('1:00:00:00:00')).toBeUndefined();
    expect(parseColonDuration(' 1:00')).toBeUndefined();
    expect(parseColonDuration('1:00 ')).toBeUndefined();
    expect(parseColonDuration('1:00.')).toBeUndefined();
    expect(parseColonDuration('+1:00')).toBeUndefined();
    expect(parseColonDuration('1h 2m')).toBeUndefined();
  });

  it('returns undefined for fields out of range', () => {
    expect(parseColonDuration('1:60')).toBeUndefined();
    expect(parseColonDuration('1:60:00')).toBeUndefined();
    expect(parseColonDuration('1:24:00:00')).toBeUndefined();
  });

  it('reverses formatDuration with colon notation', () => {
    [0, 999, 1000, 59_000, 95_500, 3_723_000, 90_061_000, -3_723_000].forEach((milliseconds) => {
      expect(
        parseColonDuration(
          formatDuration(milliseconds, {colonNotation: true, secondsDecimalDigits: 3}),
        ),
      ).toBe(milliseconds);
    });
  });
});
