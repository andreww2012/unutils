---
'unutils': patch
---

Updated [`typed-query-selector` from v2.12.2 to v2.12.3](https://github.com/g-plane/typed-query-selector/compare/v2.12.2...v2.12.3)

Selectors with `[]` inside a quoted attribute value, like `input[name="tags[]"]`, are now resolved to the right element type instead of falling back to `Element`