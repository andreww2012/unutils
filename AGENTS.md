# `unutils`

`unutils` is a project aiming at providing as much utility functions as possible from a single source.
It collects utilities from popular utility libraries, such as `es-toolkit`, and provides its own.
All without zero dependencies because the external dependencies are bundled.

## Domain

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### Primary entity: Utility

- Utility is *usually* a single exported function placed in `src/<group name>/<utility-name>.ts`.
  It should be further re-exported in `src/<group name>/index.ts`.
  If you add a new group, add a new export in `src/index.ts` and `package.json`.
- It might be in one of 3 different forms:
  1. Pure re-export from an external package.
     Example: `src/array/array-combinations.ts`.
  2. Fully custom implementation.
  3. Enhanced version of an external package's utility(-ies).
     Preferably a thin wrapper that delegates the
     real work to the external function(s) while customizing/improving the UX.
     Examples: `src/array/array-difference.ts`, `src/array/sorted-index.ts`.

  The latter two forms require it to have comprehensive JSDoc documentation with purpose, parameters and return value descriptions, as well as block of examples.

### General guidance

- If you are absolutely sure your implementation is ready (the corresponding task is complete), run testing tools and fix the found issues, ignoring the pre-existing ones.
  If you make any further changes, don't also forget to test your work.
- We target modern JavaScript execution environments (node 22+ and features from "Baseline Widely Available" group), so write code appropriately.
- Update `README.md` to reflect the made changes after you've finished.
- Always challenge your implementation for performance issues and find ways to improve it, primarily algorithmic and memory related.
  Don't over-engineer or over-optimize things though.

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### Adding an Utility

- When you're asked to add an array utility, ask yourself: would it make sense and work for any kind of iterable (example: `src/iterable/count-by.ts`).
  If you think it is, ask user whether he/she would like to create a more generalized version of the current function.
- Every utility must be tested and 100% coverage must be achieved on all metrics.
  - The corresponding test should placed in `test/<group name>/<utility-name>.spec.ts` and must have a single describe called `<group name>/utilityName`.
  - Only if the utility is in the form (1), there should only be one test called `basic test`, testing the basic function usage.
- The name of the added utility must exactly match the name of the function that it mirrors or based on - unless there are multiple candidates for the form (2).
  If the name wasn't provided and it is not inferable, explicitly ask user about it.

#### Detailed naming guideline

Names target a reader who has never used the source library: we rename whenever the original is unclear, and keep it only when it already explains itself (`debounce`, `memoize`, `clamp`, `flatMap`).

- **Spell out the operation; drop terse or cryptic names.** `ary` → `withMaxArity`, `after` → `fromNthCall`, `sortedIndex` → `sortedArrayInsertionIndex`.
- **Adopt a widely-recognized math/CS term when it names the operation precisely.** `zip`/`unzip` → `arrayTranspose`, `xor` → `arraySymmetricDifference`.
- **Avoid ambiguous or misleading words.** `after`/`before` sound temporal → `fromNthCall`/`untilNthCall`; `escape` is vague → `escapeHtml`.
- **Reflect behavior, including side effects.** Mutating array helpers share an `arrayPurge*` prefix: `pull` → `arrayPurgeValues`, `remove` → `arrayPurgeBy`, `pullAt` → `arrayPurgeIndexes`.
- **Prefix by group to disambiguate and signal the operand**, where it helps: `map*` (`filter` → `mapFilter`), `set*` (`filter` → `setFilter`), and `array*` for many array utilities; likewise encode a precondition when it matters (`sortedArray…`). Not mandatory when the name is already unambiguous (`flatMap`, `sortBy`).
- **Predicates read as a question (`is*`)** — `inRange` → `isInRange`, `isLength` → `isValidLength`; converters use `to*` — `camelCase` → `toCamelCase`.
- **Strict camelCase, acronyms included.** `isJSON` → `isJson`.

> **The main good name test:** an average JavaScript developer should be able to well enough understand what the function does *only by its name*.

### Adding utilities in bulk from a new library

Don't ask whether or not should we bundle it - we almost certainly should.
The dependency won't be in prod dependencies, and re-exporting utilities instead of re-implementing them does not have any effect on bundle size (tree shaking usually work great) and reduces maintenance burden.

## Testing tools

Prefer running on the *all* changed files (not only source files!) unless not possible or instructed otherwise.

- **Types**: `nr lint:types:go`
- **ESLint**: `pnpm exec eslint list.ext1 of.ext2 changed.ext3 files.ext4`
- **Prettier**: `pnpm exec prettier --write --log-level warn changed.ts files.js`
- **Vitest**: `nr test:vitest:cov --coverage.reporter=text changed.spec.ts files.spec.js`
- Other project-wide tests: `nr knip && nr spellcheck && build:test`
- If the lockfile was modified: `nr deps:check`

<!-- eslint-disable-next-line markdown-preferences/heading-casing -->
### CSpell

Prefer ignoring words only encountered in a single file in that file itself with the top-level CSpell comment `cspell:ignore words to disable`.
