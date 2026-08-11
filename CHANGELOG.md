# unutils

## 0.2.0

### Minor Changes

- 9fe6fdb: Added the following new utilities from [`ms-ts`](https://npmx.dev/ms-ts) package:

  - `ms` (`misc` group)
  - `Ms` (`types` group)

- 2fecdaf: Added a new `misc/generateMailtoLink` utility
- 280d41e: Added the following new utilities from [`typed-query-selector`](https://npmx.dev/typed-query-selector) package, belonging to the new `dom` group:

  - `querySelectorTyped`
  - `querySelectorAllTyped`
  - `closestTyped`
  - `ElementFromSelector` (type)
  - `ElementFromSelectorStrict` (type)
  - `ElementFromTagName` (type)

  Added two opt-in side-effect entrypoints that type the _native_ DOM lookup methods from the selector:

  - `unutils/dom/query-selector-typed.global`
  - `unutils/dom/query-selector-typed-strict.global`

  You should import at most one of the two.

- 19ad83a: Added the following new utilities from [`nanoid`](https://npmx.dev/nanoid) package, belonging to the new `id` group:

  - `nanoid`
  - `nanoidFactory`
  - `NANOID_URL_ALPHABET` (constant)

## 0.1.0

### Minor Changes

- 68b46d2: `Nullable`: new type utility that wides the given type with `null` and `undefined`
- b16aa66: Updated [`es-toolkit` from v1.47.1 to v1.49.0](https://github.com/toss/es-toolkit/compare/v1.47.1...v1.49.0):

  - `arrayChunks` now accepts a function as the second parameter, using `chunkBy` from `es-toolkit/fp` in this case

- 6afcd0e: Updated [`ts-extras` from v1.0.0 to v1.2.0](https://github.com/sindresorhus/ts-extras/compare/v1.0.0...v1.2.0):

  - Added `object/object{Assign,Update}` utilities as-is

- df7f800: Updated [`type-fest` from v5.7.0 to v5.8.0](https://github.com/sindresorhus/type-fest/compare/v5.7.0...v5.8.0):

  - Added `ExtractExactly`, `StringLength`, `StringToArray` and `StringToNumber` utilities as-is

- fb67815: `Falsy`, `Truthy`: new type utilities to represent "falsy" and "truthy" runtime values respectively, to the degree TypeScript allows that
- 8ef2d03: Added a new group of object traversing utilities (called `traverse`) from `neotraverse` package: `traverse{Every,Filter,Find,ForEach,Map,Nodes,Paths,Reduce,Some}`

### Patch Changes

- 34da115: `arrayify` now correctly flattens heterogeneous array types (`(T | T[])[]` becomes `T[]`)
- a554170: Added missing type parameter to `jsonParseSafe`, allowing to cast the output to the given type
- 6de873b: <s>`arraySwapIndices`</s> utility was renamed to `arraySwapIndexes`

## 0.0.1

### Patch Changes

- 901b105: Initial release.

## 0.0.1

### Patch Changes

- 901b105: Initial release.
