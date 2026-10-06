---
'unutils': patch
---

Fixed `jsonParseAsync` and `jsonStringifyAsync`:

- `jsonParseAsync` no longer rejects every input with `ReferenceError: chunk is not defined`
- `jsonStringifyAsync` now matches `JSON.stringify` in more cases:
  - nested objects and arrays are indented correctly with `space`
  - `space` is limited like in `JSON.stringify`: strings are cut to 10 characters, and numbers are truncated
  - values with `toJSON` (like `Date`) no longer get extra whitespace, and the replacer gets them after `toJSON` is called
  - the replacer gets array indexes as strings, and a replacer array accepts numbers and skips duplicates
  - control characters are escaped
- `jsonStringifyAsync` now respects `intensity` instead of always using `1`
- Concurrent `jsonStringifyAsync` calls no longer mix up long strings or fail with "Circular Structure Detected"
