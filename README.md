<!-- cspell:ignore jsonrepair jsondiffpatch hyperjump unpatch lerp -->

# `unutils`

A growing collection of general-purpose utilities and TypeScript types, mostly consolidated from existing popular packages with improved UX/DX, bug fixes and improvements in functionality.

## Features

- 🌱 **Zero dependencies**: everything is bundled;
- ✨ **More than 250** utilities and **200** types.

## Installation

Minimum supported runtimes:

- NodeJS: `^22.18.0 || >=24`
- Browsers: all [Baseline widely available](https://web-platform-dx.github.io/baseline) features are implemented (see [the corresponding `browserslist` browsers list](https://browsersl.ist/#q=baseline+widely+available))

```sh
pnpm i -D unutils
npm i -D unutils
yarn add -D unutils
```

## Usage

Import any function or type from the main entrypoint (except for runtime-specific utilities):

```ts
import {mapKeys} from 'unutils';
```

or from a specific entrypoint:

```ts
import {every} from 'unutils/iterable';
```

See individual symbols' JSDoc for detailed documentation.

<details>
<summary>List of entrypoints</summary>

| Entrypoint  | Description                                            | Available in main? |
| ----------- | ------------------------------------------------------ | ------------------ |
| `array`     | Array and tuple manipulation                           | ✅                 |
| `async`     | Promises, mutexes, timeouts and concurrency            | ✅                 |
| `function`  | Function composition, currying and partial application | ✅                 |
| `iterable`  | Generic iterable traversal and aggregation             | ✅                 |
| `json`      | JSON parsing and serialization                         | ✅                 |
| `map`       | `Map` querying and transformation                      | ✅                 |
| `math`      | Numeric aggregation, interpolation and randomness      | ✅                 |
| `misc`      | Miscellaneous helpers that fit no other group          | ✅                 |
| `object`    | Object merging, picking and deep-path access           | ✅                 |
| `predicate` | Type guards and value predicates                       | ✅                 |
| `regex`     | Type-safe `RegExp` and pattern escaping                | ✅                 |
| `runtime`   | Runtime environment detection                          | ✅                 |
| `server`    | Node-only helpers (filesystem, process, terminal)      | ❌                 |
| `set`       | `Set` querying and transformation                      | ✅                 |
| `string`    | String casing, splitting and affixing                  | ✅                 |
| `ts`        | TypeScript runtime and compile-time assertions         | ✅                 |
| `types`     | Type-only utility types                                | ✅                 |
| `value`     | Cloning, equality and type inspection for any value    | ✅                 |

</details>

## Functions & types

### Packages

Each bundled package has its own page under [`docs/packages/`](docs/packages/), listing every
utility it provides and how it maps into `unutils` (renames, consolidations, and what was skipped).

| Package                                                           | What we take from it                                                                                                                           |
| ----------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [`es-toolkit`](docs/packages/es-toolkit.md)                       | Broad lodash-style toolkit — the bulk of the `array`, `object`, `function`, `math`, `predicate` and `string` groups (plus `es-toolkit/compat`) |
| [`remeda`](docs/packages/remeda.md)                               | Data-first utilities with strong tuple/literal typing — many `array`/`object` helpers                                                          |
| [`@antfu/utils`](docs/packages/@antfu__utils.md)                  | Small general-purpose helpers (e.g. `ensurePrefix`, `toForwardSlashes`)                                                                        |
| [`arkregex`](docs/packages/arkregex.md)                           | Type-safe `RegExp` that infers the match and captures from a literal pattern                                                                   |
| [`dedent`](docs/packages/dedent.md)                               | Tagged-template / function dedent that handles interpolations                                                                                  |
| [`destr`](docs/packages/destr.md)                                 | Forgiving and strict JSON parsing (`jsonParseSafe` / `jsonParse`)                                                                              |
| [`devalue`](docs/packages/devalue.md)                             | Serialize/revive `Date`/`Map`/`Set`/`BigInt` and circular refs (non-JSON)                                                                      |
| [`lossless-json`](docs/packages/lossless-json.md)                 | Precision-preserving JSON parse/stringify (`bigint` and decimals)                                                                              |
| [`safe-stable-stringify`](docs/packages/safe-stable-stringify.md) | Deterministic, circular-safe `JSON.stringify`                                                                                                  |
| [`string-ts`](docs/packages/string-ts.md)                         | Type-level-aware string helpers — literal-preserving case conversion, native-method wrappers and object-key transforms                         |
| [`ts-extras`](docs/packages/ts-extras.md)                         | Thin, strongly-typed wrappers over native methods                                                                                              |
| [`type-fest`](docs/packages/type-fest.md)                         | Type-only utility types (the `types` group / `unutils/types`)                                                                                  |
| [`yieldable-json`](docs/packages/yieldable-json.md)               | Non-blocking async JSON parse/stringify                                                                                                        |

<details>
<summary>Under consideration</summary>

Candidate libraries on the radar. These cover JSON *manipulation* axes (repair, partial parsing, diff, pointer/patch) not yet provided — adding them would expand `unutils` beyond parsing and serialization.

| Library                                             | Axis                            | Status | Notes                                                                                            |
| --------------------------------------------------- | ------------------------------- | ------ | ------------------------------------------------------------------------------------------------ |
| [`jsonrepair`][jsonrepair]                          | Repair malformed JSON           | 🚧     | Fixes unquoted keys, trailing commas, comments, fenced blocks, etc.; complements `jsonParseSafe` |
| [`partial-json`][partial-json]                      | Parse incomplete/truncated JSON | 🚧     | Best-effort value from a partial buffer (e.g. streaming LLM output); configurable `Allow` mask   |
| [`jsondiffpatch`][jsondiffpatch]                    | Document diff/patch             | 🚧     | `diff`/`patch`/`unpatch`/`reverse` with array-move detection; core has no runtime dependency     |
| [`@hyperjump/json-pointer`][hyperjump-json-pointer] | JSON Pointer (RFC 6901)         | 🚧     | Get/set/remove a value by `/a/b/0` path                                                          |
| [`immutable-json-patch`][immutable-json-patch]      | JSON Patch (RFC 6902)           | 🚧     | Immutable apply/compare/revert; pairs with JSON Pointer                                          |
| JSON Merge Patch (RFC 7386)                         | Merge patch                     | 🚧     | No well-maintained typed library exists; a custom implementation would be the likely route       |

> JSONPath (querying) was considered and **set aside**: the dominant `jsonpath-plus` has a history of RCE advisories, and the axis is broad/lower-demand. Relaxed syntax (JSON5/JSONC), canonical/RFC 8785 output, and `bigint`-safe stringify are already covered by existing entries or native features.

</details>

### Custom functions

| Our function group and name           | Notes                                                                                                                                                                   |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array/arrayAt`                       | Consolidates `ts-extras`' `arrayAt` (precise tuple typing for literal indices) with es-toolkit's `at` (also accepts a list of indices)                                  |
| `array/arrayDifference`               | Consolidates `difference`/`differenceBy`/`differenceWith`; optional mapper or comparator                                                                                |
| `array/arrayDrop`                     | Consolidates `drop`/`dropWhile`; pass a predicate to drop while it holds                                                                                                |
| `array/arrayDropFirstBy`              | Drops the `count` "smallest" elements by one or more `OrderRule`s (via `remeda`'s `dropFirstBy`), O(n) without sorting; kept elements keep their order                  |
| `array/arrayDropRight`                | Consolidates `dropRight`/`dropRightWhile`; pass a predicate to drop while it holds                                                                                      |
| `array/arrayFill`                     | Consolidates `fill`/`toFilled`; pass `{copy: true}` to return a new array                                                                                               |
| `array/arrayFilter`                   | Tuple-aware `Array#filter` (via `remeda`); a tuple + (inferred) type guard yields the refined tuple (`[1, 2, 3]` filtered by `!== 2` → `[1, 3]`) not `(1 \| 3)[]`       |
| `array/arrayFirstBy`                  | First element by one or more `OrderRule`s (via `remeda`'s `firstBy`), O(n) without sorting; min/max + tie-breakers; non-empty tuples never give `undefined`             |
| `array/arrayHasMinElements`           | Type-guard (via `remeda`'s `hasAtLeast`): a literal minimum narrows to a known-minimum tuple; non-literal returns a plain `boolean`                                     |
| `array/arrayify`                      | Wraps non-arrays (tuple-preserving); nullish input returns `[]` (or `[value]` with `wrapNullish`)                                                                       |
| `array/arrayIntersection`             | Consolidates `intersection`/`intersectionBy`/`intersectionWith`; optional mapper or comparator                                                                          |
| `array/arrayIsSubset`                 | Consolidates `isSubset`/`isSubsetWith`; optional mapper or comparator                                                                                                   |
| `array/arrayMap`                      | Tuple-preserving `Array#map` (via `remeda`); a fixed-length tuple maps to a same-length tuple instead of widening to `U[]`                                              |
| `array/arrayMapWithAccumulator`       | Prefix scan (via `remeda`'s `mapWithFeedback`): threads an accumulator, returning every intermediate state (same length, tuple-preserving)                              |
| `array/arrayNthBy`                    | Element at the `index`-th position in the order defined by `OrderRule`s (via `remeda`'s `nthBy`), O(n) without sorting; out-of-bounds → `undefined`                     |
| `array/arrayPartition`                | Single predicate gives a binary `[matched, unmatched]` (guard-narrowing); multiple predicates give an n-way partition                                                   |
| `array/arrayPurgeValues`              | Consolidates `pull`/`pullAllBy`/`pullAllWith`; mutating; optional mapper or comparator                                                                                  |
| `array/arrayRankBy`                   | Rank an item would have by one or more `OrderRule`s — count of elements sorting before it (via `remeda`'s `rankBy`), O(n); item need not be present                     |
| `array/arrayReverse`                  | Tuple-preserving reverse (via `remeda` + type-fest's `ArrayReverse`); a fixed-length tuple reverses to a same-length tuple instead of widening to a union array         |
| `array/arraySample`                   | Consolidates `sample`/`sampleSize`; pass a size for multiple elements, `{withReplacement: true}` to allow repeats                                                       |
| `array/arraySort`                     | Length-preserving non-mutating sort by comparator (via `remeda`); a fixed-length tuple keeps its length (slots widen to the element union)                              |
| `array/arraySplit`                    | Consolidates remeda's `splitAt`/`splitWhen` into `[before, after]`; pass a predicate to split at the first match; tuple-preserving for literal indices                  |
| `array/arraySwapIndices`              | Swaps the elements at two indices (tuple-preserving via `remeda`); negative indices count from the end; out-of-bounds/`NaN` returns an unchanged copy                   |
| `array/arraySymmetricDifference`      | Consolidates `xor`/`xorBy`/`xorWith`; renamed to the set-theory term                                                                                                    |
| `array/arrayTakeFirstBy`              | The `count` "smallest" elements by one or more `OrderRule`s (via `remeda`'s `takeFirstBy`), O(n) without sorting                                                        |
| `array/arrayTakeWhile`                | Consolidates `takeWhile`/`takeRightWhile`; pass `true` to walk from the end                                                                                             |
| `array/arrayTranspose`                | Consolidates `zip`/`unzip`/`zipWith`/`unzipWith`; optional `(...column) => value` iteratee                                                                              |
| `array/arrayUnion`                    | Consolidates `union`/`unionBy`/`unionWith`; optional mapper or comparator                                                                                               |
| `array/arrayUnique`                   | Consolidates `uniq`/`uniqBy`/`uniqWith`; optional mapper or comparator                                                                                                  |
| `array/flatMap`                       | Defaults to deep flattening; pass a finite `depth` for a specific level                                                                                                 |
| `array/flatten`                       | Defaults to deep flattening; pass a finite `depth` for a specific level                                                                                                 |
| `array/sortedArrayIndexOf`            | Binary search for an existing value in a sorted array; returns its index or `-1`; `{rightmost?}`                                                                        |
| `array/sortedArrayInsertionIndex`     | Binary-search insertion point into a sorted array; `{iteratee?, rightmost?}`                                                                                            |
| `array/sortedArrayInsertionIndexWith` | Binary-search insertion index via a monotonic `predicate` (via `remeda`'s `sortedIndexWith`); any comparable condition, not just `number`/`string` keys                 |
| `function/curry`                      | Consolidates `curry`/`curryRight`; pass `true` to collect arguments right-to-left                                                                                       |
| `function/flow`                       | Consolidates `flow`/`flowRight`; functions as an array; pass `true` for right-to-left                                                                                   |
| `function/mapTimes`                   | Renamed `times`; iteratee required; clearer than `Array.from({length}, ...)`                                                                                            |
| `function/maybeCall`                  | Resolves a `MaybeFn` (value or getter); calls it with forwarded args when it is a function, else returns it as-is                                                       |
| `function/partial`                    | Consolidates `partial`/`partialRight`; args as an array; pass `true` to pre-apply trailing                                                                              |
| `iterable/countBy`                    | -                                                                                                                                                                       |
| `iterable/every`                      | Generalized from `set/every`; simple `(value) => boolean` callback                                                                                                      |
| `iterable/find`                       | Generalized from `set/find`; simple `(value) => boolean` callback                                                                                                       |
| `iterable/forEach`                    | Generalized from `set/forEach`; simple `(value) => void` callback                                                                                                       |
| `iterable/keyedBy`                    | -                                                                                                                                                                       |
| `iterable/reduce`                     | Generalized from `set/reduce`; simple `(acc, value) => acc` callback                                                                                                    |
| `iterable/slidingWindow`              | -                                                                                                                                                                       |
| `iterable/some`                       | Generalized from `set/some`; simple `(value) => boolean` callback                                                                                                       |
| `json/jsonParse`                      | Strict, throwing `JSON.parse` upgrade; decodes standalone tokens; blocks prototype pollution                                                                            |
| `json/jsonParseAsync`                 | Promisified non-blocking `JSON.parse` (yields to the event loop); `yieldable-json` wrapper                                                                              |
| `json/jsonParseSafe`                  | Forgiving parse that never throws; falls back to the original input when it cannot be parsed                                                                            |
| `json/jsonStringifyAsync`             | Promisified non-blocking `JSON.stringify` (yields to the event loop); `yieldable-json` wrapper                                                                          |
| `math/interpolate`                    | Renamed `lerp`; `(min, max, t, clamp = false)`; extrapolates unless `clamp` is `true`                                                                                   |
| `math/mapRange`                       | Renamed `remap`; `(value, inputRange, outputRange, clamp = false)`; affine range remap, extrapolates unless `clamp`                                                     |
| `math/max`                            | Single-pass over any iterable; returns `undefined` for an empty input                                                                                                   |
| `math/mean`                           | Generalized to any iterable (single-pass); optional `(item) => number` selector                                                                                         |
| `math/median`                         | Generalized to any iterable (materialized + sorted); optional `(item) => number` selector                                                                               |
| `math/min`                            | Single-pass over any iterable; returns `undefined` for an empty input                                                                                                   |
| `math/randomIntExclusive`             | Random integer in the **exclusive** range `[min, max)` (or `[0, max)`); strict literal-union return for small literal bounds (via `remeda`'s `randomInteger`)           |
| `math/randomIntInclusive`             | Random integer in the **inclusive** range `[min, max]` (or `[0, max]`); strict literal-union return for small literal bounds (via `remeda`'s `randomInteger`)           |
| `math/sum`                            | Generalized to any iterable (single-pass); optional `(item, index) => number` selector                                                                                  |
| `object/assignDefaults`               | Consolidates `defaults`/`defaultsDeep`/`toDefaulted`; single source or array, `{deep, copy}` modes                                                                      |
| `object/findObjectKey`                | Consolidates `findKey`/`findLastKey`; pass `true` to scan from the end                                                                                                  |
| `object/hasPath`                      | Deep-path existence check; pass `{inherited: true}` to include the prototype chain                                                                                      |
| `object/mapObjectValuesByKey`         | Transforms each value by a per-key function (via `remeda`'s `evolve`); untouched keys are kept, result stays precisely typed                                            |
| `object/mergeDeep`                    | Consolidates `merge`/`mergeWith`/`toMerged`; optional `mergeValues` customizer and `{copy}` mode                                                                        |
| `object/mergeObjects`                 | Shallow-merges a non-empty object array into one (via `remeda`'s `mergeAll`); precise positional merge type                                                             |
| `object/objectFromEntriesDeep`        | Deep-path `Object.fromEntries`; builds nested objects/arrays from `[path, value]` entries                                                                               |
| `object/objectFromKeys`               | Builds an object from an array of keys via a mapper (via `remeda`'s `fromKeys`); literal keys yield a precisely-typed record                                            |
| `object/objectUpsertProperty`         | Returns a copy with one property inserted-or-overwritten, precisely typed (via `remeda`'s `addProp`)                                                                    |
| `object/omit`                         | Consolidates `omit`/`omitBy`; top-level keys, deep paths, or a predicate                                                                                                |
| `object/pick`                         | Consolidates `pick`/`pickBy`; top-level keys, deep paths, or a predicate                                                                                                |
| `object/setByPath`                    | Consolidates `set`/`setWith`; mutating deep-path write with optional container customizer                                                                               |
| `object/setByPathImmutable`           | Immutable, statically-typed deep set (via `remeda`'s `setPath`); path & value type-checked against the object, no container creation                                    |
| `object/swapObjectKeysValues`         | Consolidates `invert`/`invertBy`; pass an iteratee to group colliding keys into arrays                                                                                  |
| `object/swapObjectProperties`         | Swaps the values (and types) of two properties (via `remeda`'s `swapProps`); object analog of `arraySwapIndices`                                                        |
| `object/toPathSegments`               | Parses a path string into segments (via `remeda`'s `stringToPath`); a literal string yields a precisely-typed tuple, numeric segments as numbers                        |
| `object/updateByPath`                 | Consolidates `update`/`updateWith`; mutating deep-path update with optional container customizer                                                                        |
| `predicate/isBuffer`                  | Enhanced with a `value is Buffer` type guard                                                                                                                            |
| `predicate/isIn`                      | `ts-extras`' `objectHasIn` with `(key, object)` argument order (reads like `key in object`); narrows the object                                                         |
| `predicate/isKeyIn`                   | `ts-extras`' `keyIn` with `(key, object)` argument order; narrows the key to those present in the object                                                                |
| `predicate/isTruthy`                  | Truthy type guard whose narrowing subtracts the falsy members (unlike `.filter(Boolean)`, which keeps the type)                                                         |
| `server/readFileSafe`                 | Reads a file, returning `null` on a missing file (`ENOENT`) but rethrowing other errors; `asBinary` for a raw `Buffer`                                                  |
| `string/ensurePrefix`                 | `(value, prefix)` (subject-first); prepends `prefix` only when missing                                                                                                  |
| `string/ensureSuffix`                 | `(value, suffix)` (subject-first); appends `suffix` only when missing                                                                                                   |
| `string/stringReverse`                | Reverses a string by grapheme (via es-toolkit's `reverseString`, so emoji stay intact); literal inputs get the precise reversed type                                    |
| `string/toCamelCase`                  | camelCase; es-toolkit runtime (Unicode-aware) + `string-ts` literal type. Renamed from es-toolkit's `camelCase`                                                         |
| `string/toConstantCase`               | CONSTANT_CASE; es-toolkit runtime + `string-ts` literal type                                                                                                            |
| `string/toDelimiterCase`              | Joins words with a delimiter, preserving case (via es-toolkit's `words`); literal inputs get the precise type                                                           |
| `string/toKebabCase`                  | kebab-case; es-toolkit runtime + `string-ts` literal type                                                                                                               |
| `string/toLowerCase`                  | Space-joined lower-case words; es-toolkit runtime + `string-ts` literal type                                                                                            |
| `string/toPascalCase`                 | PascalCase; es-toolkit runtime + `string-ts` literal type                                                                                                               |
| `string/toSnakeCase`                  | snake_case; es-toolkit runtime + `string-ts` literal type                                                                                                               |
| `string/toTitleCase`                  | Title-cases a string (via `remeda`'s `toTitleCase`); literal inputs get the precise title-cased type; preserves consecutive capitals by default. Replaces `toStartCase` |
| `string/toUpperCase`                  | Space-joined UPPER-CASE words; es-toolkit runtime + `string-ts` literal type                                                                                            |
| `string/toWords`                      | Splits a string into words (via es-toolkit); literal inputs get the precise word tuple                                                                                  |
| `ts/allUnionMembers`                  | Compile-time guard that a tuple lists every member of a union exactly once (no missing, extra or duplicate); `{readonly}` keeps the tuple readonly                      |
| `value/cloneDeep`                     | Consolidates `cloneDeep`/`cloneDeepWith`; optional customizer                                                                                                           |
| `value/cloneShallow`                  | Consolidates `clone`/`cloneWith`; optional customizer                                                                                                                   |
| `value/isEqual`                       | Consolidates `isEqual`/`isEqualWith`; optional customizer                                                                                                               |
| `value/isObjectMatching`              | Consolidates `isMatch`/`isMatchWith`; deep partial match; optional customizer                                                                                           |
| `value/typeOf`                        | Enhanced `typeof`: lowercase for primitives and `null`, the `Symbol.toStringTag` class tag for objects (`Array`, `Date`, …)                                             |

## Contributors

<!-- eslint-disable markdown-preferences/padding-line-between-blocks, markdown/require-alt-text -->
<!-- cspell:disable -->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/andreww2012"><img src="https://avatars.githubusercontent.com/u/6554045?v=4?s=70" width="70px;" alt="Andrew Kazakov"/><br /><sub><b>Andrew Kazakov</b></sub></a><br /><a href="https://github.com/andreww2012/unutils/commits?author=andreww2012" title="Code">💻</a> <a href="https://github.com/andreww2012/unutils/commits?author=andreww2012" title="Documentation">📖</a> <a href="#infra-andreww2012" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-andreww2012" title="Maintenance">🚧</a> <a href="#tool-andreww2012" title="Tools">🔧</a> <a href="https://github.com/andreww2012/unutils/commits?author=andreww2012" title="Tests">⚠️</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

[jsonrepair]: https://npmx.dev/jsonrepair

[partial-json]: https://npmx.dev/partial-json

[jsondiffpatch]: https://npmx.dev/jsondiffpatch

[hyperjump-json-pointer]: https://npmx.dev/@hyperjump/json-pointer

[immutable-json-patch]: https://npmx.dev/immutable-json-patch

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- eslint-enable markdown-preferences/padding-line-between-blocks, markdown/require-alt-text -->
