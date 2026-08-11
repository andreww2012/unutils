---
'unutils': minor
---

Added the following new utilities from [`typed-query-selector`](https://npmx.dev/typed-query-selector) package, belonging to the new `dom` group:

- `querySelectorTyped`
- `querySelectorAllTyped`
- `closestTyped`
- `ElementFromSelector` (type)
- `ElementFromSelectorStrict` (type)
- `ElementFromTagName` (type)

Added two opt-in side-effect entrypoints that type the *native* DOM lookup methods from the selector:

- `unutils/dom/query-selector-typed.global`
- `unutils/dom/query-selector-typed-strict.global`

You should import at most one of the two.
