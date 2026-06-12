# Readme

## Functions

**Legend**:

- ✅ - implemented
- ⌛ - to be implemented
- ❓ - under consideration
- ❌ - won't be added (see notes)

### Custom functions

| Our function group and name       | Notes                                                                                              |
| --------------------------------- | -------------------------------------------------------------------------------------------------- |
| `array/arrayAtMulti`              | Extended to also accept a single index, not just a list                                            |
| `array/arrayDifference`           | Consolidates `difference`/`differenceBy`/`differenceWith`; optional mapper or comparator           |
| `array/arrayDrop`                 | Consolidates `drop`/`dropWhile`; pass a predicate to drop while it holds                           |
| `array/arrayDropRight`            | Consolidates `dropRight`/`dropRightWhile`; pass a predicate to drop while it holds                 |
| `array/arrayFill`                 | Consolidates `fill`/`toFilled`; pass `{copy: true}` to return a new array                          |
| `array/arrayify`                  | Wraps non-arrays (tuple-preserving); nullish input returns `[]`                                    |
| `array/arrayIntersection`         | Consolidates `intersection`/`intersectionBy`/`intersectionWith`; optional mapper or comparator     |
| `array/arrayIsSubset`             | Consolidates `isSubset`/`isSubsetWith`; optional mapper or comparator                              |
| `array/arrayPurgeValues`          | Consolidates `pull`/`pullAllBy`/`pullAllWith`; mutating; optional mapper or comparator             |
| `array/arraySample`               | Consolidates `sample`/`sampleSize`; pass a size for multiple elements                              |
| `array/arraySymmetricDifference`  | Consolidates `xor`/`xorBy`/`xorWith`; renamed to the set-theory term                               |
| `array/arrayTakeWhile`            | Consolidates `takeWhile`/`takeRightWhile`; pass `true` to walk from the end                        |
| `array/arrayTranspose`            | Consolidates `zip`/`unzip`/`zipWith`/`unzipWith`; optional `(...column) => value` iteratee         |
| `array/arrayUnion`                | Consolidates `union`/`unionBy`/`unionWith`; optional mapper or comparator                          |
| `array/arrayUnique`               | Consolidates `uniq`/`uniqBy`/`uniqWith`; optional mapper or comparator                             |
| `array/flatMap`                   | Defaults to deep flattening; pass a finite `depth` for a specific level                            |
| `array/flatten`                   | Defaults to deep flattening; pass a finite `depth` for a specific level                            |
| `array/sortedArrayIndexOf`        | Binary search for an existing value in a sorted array; returns its index or `-1`; `{rightmost?}`   |
| `array/sortedArrayInsertionIndex` | Binary-search insertion point into a sorted array; `{iteratee?, rightmost?}`                       |
| `function/curry`                  | Consolidates `curry`/`curryRight`; pass `true` to collect arguments right-to-left                  |
| `function/flow`                   | Consolidates `flow`/`flowRight`; functions as an array; pass `true` for right-to-left              |
| `function/mapTimes`               | Renamed `times`; iteratee required; clearer than `Array.from({length}, ...)`                       |
| `function/partial`                | Consolidates `partial`/`partialRight`; args as an array; pass `true` to pre-apply trailing         |
| `iterable/countBy`                | -                                                                                                  |
| `iterable/every`                  | Generalized from `set/every`; simple `(value) => boolean` callback                                 |
| `iterable/find`                   | Generalized from `set/find`; simple `(value) => boolean` callback                                  |
| `iterable/forEach`                | Generalized from `set/forEach`; simple `(value) => void` callback                                  |
| `iterable/keyedBy`                | -                                                                                                  |
| `iterable/reduce`                 | Generalized from `set/reduce`; simple `(acc, value) => acc` callback                               |
| `iterable/slidingWindow`          | -                                                                                                  |
| `iterable/some`                   | Generalized from `set/some`; simple `(value) => boolean` callback                                  |
| `math/max`                        | Single-pass over any iterable; returns `undefined` for an empty input                              |
| `math/mean`                       | Generalized to any iterable (single-pass); optional `(item) => number` selector                    |
| `math/median`                     | Generalized to any iterable (materialized + sorted); optional `(item) => number` selector          |
| `math/min`                        | Single-pass over any iterable; returns `undefined` for an empty input                              |
| `math/sum`                        | Generalized to any iterable (single-pass); optional `(item, index) => number` selector             |
| `object/assignDefaults`           | Consolidates `defaults`/`defaultsDeep`/`toDefaulted`; single source or array, `{deep, copy}` modes |
| `object/findObjectKey`            | Consolidates `findKey`/`findLastKey`; pass `true` to scan from the end                             |
| `object/hasPath`                  | Deep-path existence check; pass `{inherited: true}` to include the prototype chain                 |
| `object/mergeDeep`                | Consolidates `merge`/`mergeWith`/`toMerged`; optional `mergeValues` customizer and `{copy}` mode   |
| `object/objectFromEntriesDeep`    | Deep-path `Object.fromEntries`; builds nested objects/arrays from `[path, value]` entries          |
| `object/omit`                     | Consolidates `omit`/`omitBy`; top-level keys, deep paths, or a predicate                           |
| `object/pick`                     | Consolidates `pick`/`pickBy`; top-level keys, deep paths, or a predicate                           |
| `object/setByPath`                | Consolidates `set`/`setWith`; mutating deep-path write with optional container customizer          |
| `object/swapObjectKeysValues`     | Consolidates `invert`/`invertBy`; pass an iteratee to group colliding keys into arrays             |
| `object/updateByPath`             | Consolidates `update`/`updateWith`; mutating deep-path update with optional container customizer   |
| `predicate/isBuffer`              | Enhanced with a `value is Buffer` type guard                                                       |
| `value/cloneDeep`                 | Consolidates `cloneDeep`/`cloneDeepWith`; optional customizer                                      |
| `value/cloneShallow`              | Consolidates `clone`/`cloneWith`; optional customizer                                              |
| `value/isEqual`                   | Consolidates `isEqual`/`isEqualWith`; optional customizer                                          |
| `value/isObjectMatching`          | Consolidates `isMatch`/`isMatchWith`; deep partial match; optional customizer                      |

### `es-toolkit`

| Original function group and name | Status | Our function group and name        | Notes                                                                                    |
| -------------------------------- | ------ | ---------------------------------- | ---------------------------------------------------------------------------------------- |
| `array/at`                       | ✅     | `array/arrayAtMulti`               | Extended to support a single array index                                                 |
| `array/cartesianProduct`         | ✅     | `array/cartesianProduct` *(same)*  | -                                                                                        |
| `array/chunk`                    | ✅     | `array/arrayChunks`                | -                                                                                        |
| `array/combinations`             | ✅     | `array/arrayCombinations`          | -                                                                                        |
| `array/compact`                  | ✅     | `array/arrayWithoutFalsy`          | -                                                                                        |
| `array/countBy`                  | ✅     | `iterable/countBy`                 | -                                                                                        |
| `array/differenceBy`             | ✅     | `array/arrayDifference`            | Pass a mapper `(value) => key` as third arg                                              |
| `array/differenceWith`           | ✅     | `array/arrayDifference`            | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/difference`               | ✅     | `array/arrayDifference`            | Consolidated with `differenceBy`/`differenceWith`                                        |
| `array/dropRightWhile`           | ✅     | `array/arrayDropRight`             | Pass a predicate `(item) => boolean` as second arg                                       |
| `array/dropRight`                | ✅     | `array/arrayDropRight`             | Consolidated with `dropRightWhile`                                                       |
| `array/dropWhile`                | ✅     | `array/arrayDrop`                  | Pass a predicate `(item) => boolean` as second arg                                       |
| `array/drop`                     | ✅     | `array/arrayDrop`                  | Consolidated with `dropWhile`                                                            |
| `array/fill`                     | ✅     | `array/arrayFill`                  | Consolidated with `toFilled`                                                             |
| `array/filterAsync`              | ✅     | `array/filterAsync` *(same)*       | -                                                                                        |
| `array/flatMapAsync`             | ✅     | `array/flatMapAsync` *(same)*      | -                                                                                        |
| `array/flatMapDeep`              | ✅     | `array/flatMap`                    | Call without a `depth` argument (or with `Infinity`)                                     |
| `array/flatMap`                  | ✅     | `array/flatMap` *(same)*           | Defaults to deep flattening; pass a finite `depth` as third arg for a specific level     |
| `array/flattenDeep`              | ✅     | `array/flatten`                    | Call without a `depth` argument (or with `Infinity`)                                     |
| `array/flatten`                  | ✅     | `array/flatten` *(same)*           | Defaults to deep flattening; pass a finite `depth` as second arg for a specific level    |
| `array/forEachAsync`             | ✅     | `array/forEachAsync` *(same)*      | -                                                                                        |
| `array/forEachRight`             | ✅     | `array/forEachRight` *(same)*      | -                                                                                        |
| `array/groupBy`                  | ❌     | *(native)*                         | Use the native `Object.groupBy` / `Map.groupBy`                                          |
| `array/head`                     | ❌     | *(native)*                         | Use `array[0]` or `array.at(0)`                                                          |
| `array/initial`                  | ❌     | *(native)*                         | Use `array.slice(0, -1)`                                                                 |
| `array/intersectionBy`           | ✅     | `array/arrayIntersection`          | Pass a mapper `(value) => key` as third arg                                              |
| `array/intersectionWith`         | ✅     | `array/arrayIntersection`          | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/intersection`             | ✅     | `array/arrayIntersection`          | Consolidated with `intersectionBy`/`intersectionWith`                                    |
| `array/isSubsetWith`             | ✅     | `array/arrayIsSubset`              | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/isSubset`                 | ✅     | `array/arrayIsSubset`              | Consolidated with `isSubsetWith` and a custom mapper-based variant                       |
| `array/keyBy`                    | ✅     | `iterable/keyedBy`                 | -                                                                                        |
| `array/last`                     | ❌     | *(native)*                         | Use `array.at(-1)`                                                                       |
| `array/limitAsync`               | ✅     | `async/withConcurrencyLimit`       | -                                                                                        |
| `array/mapAsync`                 | ✅     | `array/mapAsync` *(same)*          | -                                                                                        |
| `array/maxBy`                    | ✅     | `array/maxBy` *(same)*             | -                                                                                        |
| `array/minBy`                    | ✅     | `array/minBy` *(same)*             | -                                                                                        |
| `array/orderBy`                  | ✅     | `array/orderBy` *(same)*           | -                                                                                        |
| `array/partition`                | ✅     | `array/arrayPartition`             | -                                                                                        |
| `array/pullAt`                   | ✅     | `array/arrayPurgeIndexes`          | Renamed for clarity — mutates the input, removing elements at the given indices          |
| `array/pull`                     | ✅     | `array/arrayPurgeValues`           | Renamed for clarity — mutates the input, removing every occurrence of the given values   |
| `array/reduceAsync`              | ✅     | `array/reduceAsync` *(same)*       | -                                                                                        |
| `array/remove`                   | ✅     | `array/arrayPurgeBy`               | Renamed for clarity — mutates the input, removing elements matching the predicate        |
| `array/sampleSize`               | ✅     | `array/arraySample`                | Pass the desired sample size as second arg                                               |
| `array/sample`                   | ✅     | `array/arraySample`                | Consolidated with `sampleSize`                                                           |
| `array/shuffle`                  | ✅     | `array/arrayShuffle`               | -                                                                                        |
| `array/sortBy`                   | ✅     | `array/sortBy` *(same)*            | -                                                                                        |
| `array/tail`                     | ❌     | *(native)*                         | Use `array.slice(1)` — mirror of `initial`                                               |
| `array/takeRightWhile`           | ✅     | `array/arrayTakeWhile`             | Pass `true` as third arg to walk from the end                                            |
| `array/takeRight`                | ❌     | *(native)*                         | Use `array.slice(-n)`                                                                    |
| `array/takeWhile`                | ✅     | `array/arrayTakeWhile`             | Consolidated with `takeRightWhile`                                                       |
| `array/take`                     | ❌     | *(native)*                         | Use `array.slice(0, n)`                                                                  |
| `array/toFilled`                 | ✅     | `array/arrayFill`                  | Pass `{copy: true}` as fifth arg                                                         |
| `array/unionBy`                  | ✅     | `array/arrayUnion`                 | Pass a mapper `(value) => key` as third arg                                              |
| `array/unionWith`                | ✅     | `array/arrayUnion`                 | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/union`                    | ✅     | `array/arrayUnion`                 | Consolidated with `unionBy`/`unionWith`                                                  |
| `array/uniqBy`                   | ✅     | `array/arrayUnique`                | Pass a mapper `(value) => key` as second arg                                             |
| `array/uniqWith`                 | ✅     | `array/arrayUnique`                | Pass a comparator `(a, b) => boolean` as second arg                                      |
| `array/uniq`                     | ✅     | `array/arrayUnique`                | Consolidated with `uniqBy`/`uniqWith`                                                    |
| `array/unzipWith`                | ✅     | `array/arrayTranspose`             | Pass an iteratee `(...column) => value` as second arg                                    |
| `array/unzip`                    | ✅     | `array/arrayTranspose`             | Renamed to match the math/CS term — same operation, broader recognition                  |
| `array/windowed`                 | ✅     | `iterable/slidingWindow`           | Generalized to any iterable and returns a lazy generator; accepts the same options       |
| `array/without`                  | ✅     | `array/arrayDifference`            | Pass the values to exclude as an array                                                   |
| `array/xorBy`                    | ✅     | `array/arraySymmetricDifference`   | Pass a mapper `(value) => key` as third arg                                              |
| `array/xorWith`                  | ✅     | `array/arraySymmetricDifference`   | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/xor`                      | ✅     | `array/arraySymmetricDifference`   | Consolidated with `xorBy`/`xorWith`; renamed to the set-theory term                      |
| `array/zipObject`                | ❌     | *(native)*                         | Use `Object.fromEntries(keys.map((key, index) => [key, values[index]]))`                 |
| `array/zipWith`                  | ✅     | `array/arrayTranspose`             | Wrap the arguments in an array; pass an iteratee `(...column) => value` as second arg    |
| `array/zip`                      | ✅     | `array/arrayTranspose`             | Wrap the arguments in an array: `arrayTranspose([arr1, arr2, ...])` — same operation     |
| `function/after`                 | ✅     | `function/fromNthCall`             | Renamed to avoid the temporal-sounding `after`; ordinal semantics (calls 1..n-1 skipped) |
| `function/ary`                   | ✅     | `function/withMaxArity`            | Renamed to spell out the operation (cap forwarded args at `n`); avoids the cryptic `ary` |
| `function/asyncNoop`             | ✅     | `function/noopAsync`               | -                                                                                        |
| `function/before`                | ✅     | `function/untilNthCall`            | Renamed to avoid the temporal-sounding `before`; ordinal semantics (calls 1..n-1 fire)   |
| `function/curryRight`            | ✅     | `function/curry`                   | Pass `true` as second arg to collect arguments right-to-left                             |
| `function/curry`                 | ✅     | `function/curry` *(same)*          | Consolidated with `curryRight`                                                           |
| `function/debounce`              | ✅     | `function/debounce` *(same)*       | -                                                                                        |
| `function/flowRight`             | ✅     | `function/flow`                    | Pass `true` as second arg to compose right-to-left                                       |
| `function/flow`                  | ✅     | `function/flow` *(same)*           | Functions are passed as an array; consolidated with `flowRight`                          |
| `function/identity`              | ✅     | `function/identity` *(same)*       | -                                                                                        |
| `function/memoize`               | ✅     | `function/memoize` *(same)*        | -                                                                                        |
| `function/negate`                | ✅     | `function/negate` *(same)*         | -                                                                                        |
| `function/noop`                  | ✅     | `function/noop`                    | -                                                                                        |
| `function/once`                  | ✅     | `function/once` *(same)*           | -                                                                                        |
| `function/partialRight`          | ✅     | `function/partial`                 | Pass `true` as third arg to pre-apply trailing arguments                                 |
| `function/partial`               | ✅     | `function/partial` *(same)*        | Args are passed as an array; consolidated with `partialRight`                            |
| `function/rest`                  | ✅     | `function/rest` *(same)*           | -                                                                                        |
| `function/retry`                 | ✅     | `function/retry` *(same)*          | -                                                                                        |
| `function/spread`                | ✅     | `function/spread` *(same)*         | -                                                                                        |
| `function/throttle`              | ✅     | `function/throttle` *(same)*       | -                                                                                        |
| `function/unary`                 | ❌     | *(use `withMaxArity`)*             | Just `ary(fn, 1)` — call `withMaxArity(fn, 1)` instead                                   |
| `map/countBy`                    | ✅     | `iterable/countBy`                 | -                                                                                        |
| `map/every`                      | ✅     | `map/mapEvery`                     | Renamed for `map`-prefix consistency                                                     |
| `map/filter`                     | ✅     | `map/mapFilter`                    | Renamed for `map`-prefix consistency                                                     |
| `map/findKey`                    | ✅     | `map/mapFindKey`                   | Renamed for `map`-prefix consistency                                                     |
| `map/findValue`                  | ✅     | `map/mapFindValue`                 | Renamed for `map`-prefix consistency                                                     |
| `map/forEach`                    | ✅     | `map/mapForEach`                   | Renamed for `map`-prefix consistency                                                     |
| `map/hasValue`                   | ✅     | `map/mapHasValue`                  | Renamed for `map`-prefix consistency                                                     |
| `map/keyBy`                      | ✅     | `iterable/keyedBy`                 | -                                                                                        |
| `map/mapKeys`                    | ✅     | `map/mapMapKeys`                   | Renamed for `map`-prefix consistency — `mapKeys` is reserved for the object utility      |
| `map/mapValues`                  | ✅     | `map/mapMapValues`                 | Renamed for `map`-prefix consistency — `mapValues` is reserved for the object utility    |
| `map/reduce`                     | ✅     | `map/mapReduce`                    | Renamed for `map`-prefix consistency                                                     |
| `map/some`                       | ✅     | `map/mapSome`                      | Renamed for `map`-prefix consistency                                                     |
| `math/clamp`                     | ✅     | `math/clamp` *(same)*              | -                                                                                        |
| `math/inRange`                   | ✅     | `math/isInRange`                   | Renamed for clarity — same exclusive-upper-bound semantics                               |
| `math/meanBy`                    | ✅     | `math/mean`                        | Pass a selector `(item) => number` as second arg                                         |
| `math/mean`                      | ✅     | `math/mean` *(same)*               | Consolidated with `meanBy`; accepts any iterable (single-pass)                           |
| `math/medianBy`                  | ✅     | `math/median`                      | Pass a selector `(item) => number` as second arg                                         |
| `math/median`                    | ✅     | `math/median` *(same)*             | Consolidated with `medianBy`; accepts any iterable (materialized + sorted)               |
| `math/percentile`                | ✅     | `math/percentile` *(same)*         | -                                                                                        |
| `math/randomInt`                 | ✅     | `math/randomInt` *(same)*          | -                                                                                        |
| `math/random`                    | ✅     | `math/random` *(same)*             | -                                                                                        |
| `math/rangeRight`                | ✅     | `math/rangeRight` *(same)*         | -                                                                                        |
| `math/range`                     | ✅     | `math/range` *(same)*              | -                                                                                        |
| `math/round`                     | ✅     | `math/round` *(same)*              | -                                                                                        |
| `math/sumBy`                     | ✅     | `math/sum`                         | Pass a selector `(item, index) => number` as second arg                                  |
| `math/sum`                       | ✅     | `math/sum` *(same)*                | Consolidated with `sumBy`; accepts any iterable (single-pass)                            |
| `predicate/isArrayBuffer`        | ❌     | *(native)*                         | Use `x instanceof ArrayBuffer`                                                           |
| `predicate/isBlob`               | ❌     | *(native)*                         | Use `x instanceof Blob`                                                                  |
| `predicate/isBoolean`            | ❌     | *(native)*                         | Use `typeof x === 'boolean'`                                                             |
| `predicate/isBrowser`            | ✅     | `runtime/isBrowser`                | Moved to the `runtime` group — not a predicate on a value                                |
| `predicate/isBuffer`             | ✅     | `predicate/isBuffer` *(same)*      | Enhanced with a `value is Buffer` type guard                                             |
| `predicate/isDate`               | ❌     | *(native)*                         | Use `x instanceof Date`                                                                  |
| `predicate/isEmptyObject`        | ✅     | `predicate/isEmptyObject` *(same)* | -                                                                                        |
| `predicate/isEqual`              | ✅     | `value/isEqual`                    | Moved to the `value` group; consolidated with `isEqualWith`                              |
| `predicate/isEqualWith`          | ✅     | `value/isEqual`                    | Pass a customizer `(x, y, key, xParent, yParent, stack) => boolean \| void` as third arg |
| `predicate/isError`              | ❌     | *(native)*                         | Use `Error.isError(x)` or `x instanceof Error`                                           |
| `predicate/isFile`               | ❌     | *(native)*                         | Use `x instanceof File`                                                                  |
| `predicate/isFunction`           | ❌     | *(native)*                         | Use `typeof x === 'function'`                                                            |
| `predicate/isJSON`               | ✅     | `predicate/isJson`                 | Renamed to strict camelCase                                                              |
| `predicate/isJSONValue`          | ✅     | `predicate/isJsonValue`            | Renamed to strict camelCase                                                              |
| `predicate/isJSONArray`          | ✅     | `predicate/isJsonArray`            | Renamed to strict camelCase                                                              |
| `predicate/isJSONObject`         | ✅     | `predicate/isJsonObject`           | Renamed to strict camelCase                                                              |
| `predicate/isLength`             | ✅     | `misc/isValidLength`               | Moved to the `misc` group and renamed for clarity                                        |
| `predicate/isMap`                | ❌     | *(native)*                         | Use `x instanceof Map`                                                                   |
| `predicate/isNil`                | ❌     | *(native)*                         | Use `x == null`                                                                          |
| `predicate/isNode`               | ✅     | `runtime/isNode`                   | Moved to the `runtime` group — not a predicate on a value                                |
| `predicate/isNotNil`             | ❌     | *(native)*                         | Use `x != null`                                                                          |
| `predicate/isNull`               | ❌     | *(native)*                         | Use `x === null`                                                                         |
| `predicate/isNumber`             | ❌     | *(native)*                         | Use `typeof x === 'number'`                                                              |
| `predicate/isPlainObject`        | ✅     | `predicate/isPlainObject` *(same)* | -                                                                                        |
| `predicate/isPrimitive`          | ✅     | `predicate/isPrimitive` *(same)*   | -                                                                                        |
| `predicate/isPromise`            | ❌     | *(native)*                         | Use `x instanceof Promise`                                                               |
| `predicate/isRegExp`             | ❌     | *(native)*                         | Use `x instanceof RegExp`                                                                |
| `predicate/isSet`                | ❌     | *(native)*                         | Use `x instanceof Set`                                                                   |
| `predicate/isString`             | ❌     | *(native)*                         | Use `typeof x === 'string'`                                                              |
| `predicate/isSymbol`             | ❌     | *(native)*                         | Use `typeof x === 'symbol'`                                                              |
| `predicate/isTypedArray`         | ✅     | `predicate/isTypedArray` *(same)*  | -                                                                                        |
| `predicate/isUndefined`          | ❌     | *(native)*                         | Use `typeof x === 'undefined'` or `x === undefined`                                      |
| `predicate/isWeakMap`            | ❌     | *(native)*                         | Use `x instanceof WeakMap`                                                               |
| `predicate/isWeakSet`            | ❌     | *(native)*                         | Use `x instanceof WeakSet`                                                               |
| `promise/allKeyed`               | ✅     | `async/allKeyed` *(same)*          | Moved to the new `async/` group                                                          |
| `promise/delay`                  | ✅     | `async/sleep`                      | Renamed for clarity — same `(ms) => Promise<void>` semantics                             |
| `promise/Mutex`                  | ✅     | `async/Mutex` *(same)*             | Moved to the new `async/` group                                                          |
| `promise/Semaphore`              | ✅     | `async/Semaphore` *(same)*         | Moved to the new `async/` group                                                          |
| `promise/timeout`                | ✅     | `async/rejectAfter`                | Renamed for clarity — `rejectAfter(ms)` returns a Promise that rejects after `ms`        |
| `promise/withTimeout`            | ✅     | `async/withTimeout` *(same)*       | Moved to the new `async/` group                                                          |
| `object/cloneDeepWith`           | ✅     | `value/cloneDeep`                  | Pass a customizer `(value, key, root, stack) => unknown` as second arg                   |
| `object/cloneDeep`               | ✅     | `value/cloneDeep`                  | Consolidated with `cloneDeepWith`                                                        |
| `object/clone`                   | ✅     | `value/cloneShallow`               | Consolidated with `cloneWith`; renamed — shallow-clones any value, not only objects      |
| `object/findKey`                 | ✅     | `object/findObjectKey`             | Renamed for clarity; consolidates `findLastKey` (pass `true` to scan from the end)       |
| `object/flattenObject`           | ✅     | `object/flattenObject` *(same)*    | -                                                                                        |
| `object/invert`                  | ✅     | `object/swapObjectKeysValues`      | Renamed for clarity; consolidates `invertBy` (pass an iteratee)                          |
| `object/mapKeys`                 | ✅     | `object/mapKeys` *(same)*          | -                                                                                        |
| `object/mapValues`               | ✅     | `object/mapValues` *(same)*        | -                                                                                        |
| `object/merge`                   | ✅     | `object/mergeDeep`                 | Renamed; consolidated with `mergeWith`/`toMerged`                                        |
| `object/mergeWith`               | ✅     | `object/mergeDeep`                 | Pass a `mergeValues` customizer in the options object                                    |
| `object/omit`                    | ✅     | `object/omit` *(same)*             | Consolidated with `omitBy`; also accepts deep path strings                               |
| `object/omitBy`                  | ✅     | `object/omit`                      | Pass a `(value, key) => boolean` predicate                                               |
| `object/pick`                    | ✅     | `object/pick` *(same)*             | Consolidated with `pickBy`; also accepts deep path strings                               |
| `object/pickBy`                  | ✅     | `object/pick`                      | Pass a `(value, key) => boolean` predicate                                               |
| `object/sortKeys`                | ✅     | `object/sortKeys` *(same)*         | -                                                                                        |
| `object/toCamelCaseKeys`         | ✅     | `object/toCamelCaseKeys` *(same)*  | -                                                                                        |
| `object/toMerged`                | ✅     | `object/mergeDeep`                 | Pass `{copy: true}` for an immutable merge                                               |
| `object/toSnakeCaseKeys`         | ✅     | `object/toSnakeCaseKeys` *(same)*  | -                                                                                        |
| `set/countBy`                    | ✅     | `iterable/countBy`                 | -                                                                                        |
| `set/every`                      | ✅     | `iterable/every`                   | Generalized to any iterable; simple `(value) => boolean` callback                        |
| `set/filter`                     | ✅     | `set/setFilter`                    | Renamed for `set`-prefix consistency                                                     |
| `set/find`                       | ✅     | `iterable/find`                    | Generalized to any iterable; simple `(value) => boolean` callback                        |
| `set/forEach`                    | ✅     | `iterable/forEach`                 | Generalized to any iterable; simple `(value) => void` callback                           |
| `set/keyBy`                      | ✅     | `iterable/keyedBy`                 | -                                                                                        |
| `set/map`                        | ✅     | `set/setMapValues`                 | Renamed for clarity — Sets only have values, not keys                                    |
| `set/reduce`                     | ✅     | `iterable/reduce`                  | Generalized to any iterable; simple `(acc, value) => acc` callback                       |
| `set/some`                       | ✅     | `iterable/some`                    | Generalized to any iterable; simple `(value) => boolean` callback                        |
| `server/colors`                  | ✅     | `server/colors` *(same)*           | Only via the `/server` subpath; not exported from the main entry                         |
| `server/exec`                    | ✅     | `server/exec` *(same)*             | Only via the `/server` subpath; not exported from the main entry                         |
| `string/camelCase`               | ✅     | `string/toCamelCase`               | -                                                                                        |
| `string/capitalize`              | ✅     | `string/capitalize` *(same)*       | -                                                                                        |
| `string/constantCase`            | ✅     | `string/toConstantCase`            | -                                                                                        |
| `string/deburr`                  | ✅     | `string/deburr` *(same)*           | -                                                                                        |
| `string/escape`                  | ✅     | `string/escapeHtml`                | Renamed for clarity — handles HTML entities specifically                                 |
| `string/escapeRegExp`            | ✅     | `string/escapeRegExp` *(same)*     | -                                                                                        |
| `string/kebabCase`               | ✅     | `string/toKebabCase`               | -                                                                                        |
| `string/lowerCase`               | ✅     | `string/toLowerCase`               | -                                                                                        |
| `string/lowerFirst`              | ✅     | `string/lowerFirst` *(same)*       | -                                                                                        |
| `string/pad`                     | ✅     | `string/stringPad`                 | Pads both sides; use native `padStart` / `padEnd` for one-sided padding                  |
| `string/pascalCase`              | ✅     | `string/toPascalCase`              | -                                                                                        |
| `string/reverseString`           | ✅     | `string/stringReverse`             | -                                                                                        |
| `string/snakeCase`               | ✅     | `string/toSnakeCase`               | -                                                                                        |
| `string/startCase`               | ✅     | `string/toStartCase`               | -                                                                                        |
| `string/trim`                    | ❌     | *(native)*                         | Use `string.trim()`                                                                      |
| `string/trimEnd`                 | ❌     | *(native)*                         | Use `string.trimEnd()`                                                                   |
| `string/trimStart`               | ❌     | *(native)*                         | Use `string.trimStart()`                                                                 |
| `string/unescape`                | ✅     | `string/unescapeHtml`              | Renamed for clarity — handles HTML entities specifically                                 |
| `string/upperCase`               | ✅     | `string/toUpperCase`               | -                                                                                        |
| `string/upperFirst`              | ✅     | `string/upperFirst` *(same)*       | -                                                                                        |
| `string/words`                   | ✅     | `string/toWords`                   | -                                                                                        |
| `utility/assert`                 | ❌     | *(use `invariant`)*                | Alias of `invariant` in es-toolkit — use `misc/invariant`                                |
| `utility/attempt`                | ✅     | `function/attempt`                 | -                                                                                        |
| `utility/attemptAsync`           | ✅     | `function/attemptAsync`            | -                                                                                        |
| `utility/invariant`              | ✅     | `misc/invariant`                   | -                                                                                        |

### `es-toolkit/compat`

Functions exclusive to the `es-toolkit/compat` (lodash-compatible) entry — i.e. those whose plain `es-toolkit` equivalent isn't already covered above. Pure name-duplicates of already-added utilities are intentionally omitted. Trivially native-replaceable functions are listed as ❌ so the decision isn't re-litigated.

| Original function group and name | Status | Our function group and name       | Notes                                                                                                |
| -------------------------------- | ------ | --------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `array/castArray`                | ✅     | `array/arrayify`                  | TS overloads widen non-arrays and preserve tuples; nullish input returns `[]` instead of `[null]`    |
| `array/concat`                   | ❌     | *(native)*                        | Use `array.concat(...)` or `[...a, ...b]`                                                            |
| `array/each`                     | ❌     | *(use `iterable/forEach`)*        | Alias of `forEach`                                                                                   |
| `array/eachRight`                | ❌     | `array/forEachRight`              | Already added                                                                                        |
| `array/every`                    | ❌     | *(use `iterable/every`)*          | Native `array.every` or the simple-callback `iterable/every`                                         |
| `array/filter`                   | ❌     | *(native)*                        | Use `array.filter(...)`; shorthand iteratees are intentionally out of scope                          |
| `array/find`                     | ❌     | *(use `iterable/find`)*           | Native `array.find` or the simple-callback `iterable/find`                                           |
| `array/findIndex`                | ❌     | *(native)*                        | Use `array.findIndex(...)`                                                                           |
| `array/findLast`                 | ❌     | *(native)*                        | Use `array.findLast(...)`                                                                            |
| `array/findLastIndex`            | ❌     | *(native)*                        | Use `array.findLastIndex(...)`                                                                       |
| `array/first`                    | ❌     | *(native)*                        | Alias of `head` — use `array[0]` / `array.at(0)`                                                     |
| `array/flatMapDepth`             | ❌     | `array/flatMap`                   | Already added — pass a finite `depth`                                                                |
| `array/flattenDepth`             | ❌     | `array/flatten`                   | Already added — pass a finite `depth`                                                                |
| `array/forEach`                  | ❌     | *(use `iterable/forEach`)*        | Collection iterator                                                                                  |
| `array/includes`                 | ❌     | *(native)*                        | Use `array.includes(...)`                                                                            |
| `array/indexOf`                  | ❌     | *(native)*                        | Use `array.indexOf(...)`                                                                             |
| `array/invokeMap`                | ❌     | *(native)*                        | Thin over `collection.map((item) => getByPath(item, path)?.(...args))` — little value                |
| `array/join`                     | ❌     | *(native)*                        | Use `array.join(...)`                                                                                |
| `array/lastIndexOf`              | ❌     | *(native)*                        | Use `array.lastIndexOf(...)`                                                                         |
| `array/map`                      | ❌     | *(native)*                        | Use `array.map(...)`; shorthand iteratees intentionally out of scope                                 |
| `array/nth`                      | ❌     | *(native)*                        | Use `array.at(n)`                                                                                    |
| `array/pullAll`                  | ❌     | `array/arrayPurgeValues`          | Already added — pass the values as an array                                                          |
| `array/pullAllBy`                | ✅     | `array/arrayPurgeValues`          | Consolidated — pass a mapper `(value) => key` as third arg                                           |
| `array/pullAllWith`              | ✅     | `array/arrayPurgeValues`          | Consolidated — pass a comparator `(a, b) => boolean` as third arg                                    |
| `array/reduce`                   | ❌     | *(use `iterable/reduce`)*         | Native `array.reduce` or the simple-callback `iterable/reduce`                                       |
| `array/reduceRight`              | ❌     | *(native)*                        | Use `array.reduceRight(...)`                                                                         |
| `array/reject`                   | ❌     | *(native)*                        | Negated filter — `array.filter((x) => !predicate(x))`                                                |
| `array/reverse`                  | ❌     | *(native)*                        | Use `array.toReversed()` / `array.reverse()`                                                         |
| `array/size`                     | ❌     | *(native)*                        | Use `array.length` / `collection.size`                                                               |
| `array/slice`                    | ❌     | *(native)*                        | Use `array.slice(...)`                                                                               |
| `array/some`                     | ❌     | *(use `iterable/some`)*           | Native `array.some` or the simple-callback `iterable/some`                                           |
| `array/sortedIndex`              | ✅     | `array/sortedArrayInsertionIndex` | Consolidated binary-search insertion point; pass `{iteratee}` and/or `{rightmost: true}`             |
| `array/sortedIndexBy`            | ✅     | `array/sortedArrayInsertionIndex` | Consolidated — pass `{iteratee}`                                                                     |
| `array/sortedIndexOf`            | ✅     | `array/sortedArrayIndexOf`        | Split out — searches for an existing value, returns its index or `-1`                                |
| `array/sortedLastIndex`          | ✅     | `array/sortedArrayInsertionIndex` | Consolidated — pass `{rightmost: true}` for the insertion point after equal elements                 |
| `array/sortedLastIndexBy`        | ✅     | `array/sortedArrayInsertionIndex` | Consolidated — pass `{iteratee, rightmost: true}`                                                    |
| `array/sortedLastIndexOf`        | ✅     | `array/sortedArrayIndexOf`        | Split out — pass `{rightmost: true}` for the last matching index                                     |
| `array/zipObjectDeep`            | ✅     | `object/objectFromEntriesDeep`    | Moved to `object`; entries-pairs API (deep-path `Object.fromEntries`) via `setByPath`                |
| `function/bind`                  | ❌     | *(native / use `partial`)*        | Use `fn.bind(thisArg, ...args)`; for placeholder partials see `function/partial`                     |
| `function/bindKey`               | ✅     | `function/bindLate`               | Renamed for clarity — late-bound method binding (resolves `object[key]` at call time)                |
| `function/defer`                 | ❌     | *(native)*                        | Use `setTimeout(fn)` / `queueMicrotask(fn)`                                                          |
| `function/delay`                 | ❌     | *(native)*                        | Use `setTimeout(fn, ms, ...args)`; for a Promise see `async/sleep`                                   |
| `function/flip`                  | ❌     | *(native)*                        | Use `(...args) => fn(...args.toReversed())`                                                          |
| `function/nthArg`                | ❌     | *(native)*                        | Use `(...args) => args.at(n)` — `Array.prototype.at` already does negative indexing                  |
| `function/overArgs`              | ❌     | *(native)*                        | Use `(...args) => fn(...args.map((a, i) => transforms[i] ? transforms[i](a) : a))`                   |
| `function/rearg`                 | ❌     | *(native)*                        | Use `(...args) => fn(...indices.map((i) => args[i]))`                                                |
| `function/wrap`                  | ❌     | *(use `partial`)*                 | `wrap(value, wrapper)` is just `partial(wrapper, [value])`                                           |
| `math/add`                       | ❌     | *(native)*                        | Use `a + b`                                                                                          |
| `math/ceil`                      | ✅     | `math/ceil`                       | Precision rounding (`ceil(4.006, 2)`); companion to `math/round`                                     |
| `math/divide`                    | ❌     | *(native)*                        | Use `a / b`                                                                                          |
| `math/floor`                     | ✅     | `math/floor`                      | Precision rounding; companion to `math/round`                                                        |
| `math/max`                       | ✅     | `math/max`                        | Single-pass over any iterable; `undefined` for empty; safe where `Math.max(...arr)` fails            |
| `math/min`                       | ✅     | `math/min`                        | Single-pass over any iterable; `undefined` for empty; safe where `Math.min(...arr)` fails            |
| `math/multiply`                  | ❌     | *(native)*                        | Use `a * b`                                                                                          |
| `math/parseInt`                  | ❌     | *(native)*                        | Use `Number.parseInt(string, radix)`                                                                 |
| `math/subtract`                  | ❌     | *(native)*                        | Use `a - b`                                                                                          |
| `object/assign`                  | ❌     | *(native)*                        | Use `Object.assign(...)` / spread                                                                    |
| `object/assignIn`                | ❌     | *(native)*                        | `extend` alias; copies inherited props — rarely wanted                                               |
| `object/assignInWith`            | ❌     | *(use `mergeWith`)*               | Customizer assign over inherited props                                                               |
| `object/assignWith`              | ❌     | *(use `mergeWith`)*               | Customizer assign                                                                                    |
| `object/at`                      | ✅     | `object/getByPaths`               | Read multiple deep paths at once; array result, plural sibling of `getByPath`                        |
| `object/cloneWith`               | ✅     | `value/cloneShallow`              | Consolidated into `cloneShallow` — pass a customizer as the second arg                               |
| `object/create`                  | ❌     | *(native)*                        | Use `Object.create(proto)` + `Object.assign`                                                         |
| `object/defaults`                | ✅     | `object/assignDefaults`           | Consolidated — single source or array of sources, fully typed                                        |
| `object/defaultsDeep`            | ✅     | `object/assignDefaults`           | Consolidated — pass `{deep: true}`                                                                   |
| `object/extend`                  | ❌     | *(native)*                        | Alias of `assignIn`                                                                                  |
| `object/extendWith`              | ❌     | *(use `mergeWith`)*               | Alias of `assignInWith`                                                                              |
| `object/findLastKey`             | ✅     | `object/findObjectKey`            | Consolidated — pass `true` to scan from the end                                                      |
| `object/forIn`                   | ❌     | *(native)*                        | Use `for...in`                                                                                       |
| `object/forInRight`              | ❌     | *(native)*                        | Reverse `for...in`                                                                                   |
| `object/forOwn`                  | ❌     | *(native)*                        | Use `Object.keys(obj).forEach(...)`                                                                  |
| `object/forOwnRight`             | ❌     | *(native)*                        | Reverse own-key iteration                                                                            |
| `object/fromPairs`               | ❌     | *(native)*                        | Use `Object.fromEntries(...)`                                                                        |
| `object/functions`               | ❌     | *(legacy)*                        | Lists method names — niche legacy util                                                               |
| `object/functionsIn`             | ❌     | *(legacy)*                        | Method names incl. inherited                                                                         |
| `object/get`                     | ✅     | `object/getByPath`                | Renamed for clarity — deep-path read with TS path typing                                             |
| `object/has`                     | ✅     | `object/hasPath`                  | Renamed for clarity — deep-path existence check                                                      |
| `object/hasIn`                   | ✅     | `object/hasPath`                  | Consolidated — pass `{inherited: true}` to include the prototype chain                               |
| `object/invertBy`                | ✅     | `object/swapObjectKeysValues`     | Pass an iteratee to group colliding keys into arrays                                                 |
| `object/keys`                    | ❌     | *(native)*                        | Use `Object.keys(...)`                                                                               |
| `object/keysIn`                  | ❌     | *(native)*                        | Own + inherited keys — rarely wanted                                                                 |
| `object/property`                | ✅     | `object/createPathGetter`         | Renamed for clarity — builds a getter bound to a path (delegates to `getByPath`)                     |
| `object/propertyOf`              | ✅     | `object/createObjectGetter`       | Renamed for clarity — builds a getter bound to an object (delegates to `getByPath`)                  |
| `object/result`                  | ❌     | *(use `getByPath`)*               | Niche — read with `getByPath` and invoke the returned function yourself (`getByPath(obj, path)?.()`) |
| `object/set`                     | ✅     | `object/setByPath`                | Renamed for clarity — mutating deep-path write, creating intermediate containers                     |
| `object/setWith`                 | ✅     | `object/setByPath`                | Consolidated — pass a container customizer as the fourth arg                                         |
| `object/toDefaulted`             | ✅     | `object/assignDefaults`           | Consolidated — pass `{copy: true}`                                                                   |
| `object/toPairs`                 | ❌     | *(native)*                        | Use `Object.entries(...)`                                                                            |
| `object/toPairsIn`               | ❌     | *(native)*                        | Entries incl. inherited                                                                              |
| `object/transform`               | ❌     | *(native)*                        | Use `array.reduce(...)` / `Object.entries(obj).reduce(...)`                                          |
| `object/unset`                   | ✅     | `object/deleteByPath`             | Renamed for clarity — mutating delete of the value at a deep path                                    |
| `object/update`                  | ✅     | `object/updateByPath`             | Renamed for clarity — mutating deep-path update via an updater function                              |
| `object/updateWith`              | ✅     | `object/updateByPath`             | Consolidated — pass a container customizer as the fourth arg                                         |
| `object/values`                  | ❌     | *(native)*                        | Use `Object.values(...)`                                                                             |
| `object/valuesIn`                | ❌     | *(native)*                        | Values incl. inherited                                                                               |
| `predicate/conforms`             | ❌     | *(out of scope)*                  | Predicate factory — `(v) => conformsTo(v, source)`; shorthand-iteratee machinery                     |
| `predicate/conformsTo`           | ❌     | *(native)*                        | Use `Object.entries(source).every(([key, predicate]) => predicate(target[key]))`                     |
| `predicate/isArguments`          | ❌     | *(legacy)*                        | `arguments` is obsolete with rest params                                                             |
| `predicate/isArray`              | ❌     | *(native)*                        | Use `Array.isArray(x)`                                                                               |
| `predicate/isArrayLike`          | ❌     | *(native)*                        | Length duck-typing — rarely needed with iterables                                                    |
| `predicate/isArrayLikeObject`    | ❌     | *(native)*                        | As above, excluding strings                                                                          |
| `predicate/isElement`            | ❌     | *(native)*                        | Use `x instanceof Element`                                                                           |
| `predicate/isEmpty`              | ✅     | `predicate/isEmptyValue`          | Renamed (any value, vs. `isEmptyObject`); empty strings/arrays/Maps/Sets/objects                     |
| `predicate/isFinite`             | ❌     | *(native)*                        | Use `Number.isFinite(x)`                                                                             |
| `predicate/isInteger`            | ❌     | *(native)*                        | Use `Number.isInteger(x)`                                                                            |
| `predicate/isMatch`              | ✅     | `value/isObjectMatching`          | Renamed; moved beside `isEqual` — deep partial match                                                 |
| `predicate/isMatchWith`          | ✅     | `value/isObjectMatching`          | Consolidated — pass a customizer as the third arg                                                    |
| `predicate/isNaN`                | ❌     | *(native)*                        | Use `Number.isNaN(x)`                                                                                |
| `predicate/isNative`             | ❌     | *(legacy)*                        | Detects native functions — niche                                                                     |
| `predicate/isObject`             | ❌     | *(native)*                        | `typeof x === 'object' && x !== null` (lodash also counts functions)                                 |
| `predicate/isObjectLike`         | ❌     | *(native)*                        | `typeof x === 'object' && x !== null`                                                                |
| `predicate/isSafeInteger`        | ❌     | *(native)*                        | Use `Number.isSafeInteger(x)`                                                                        |
| `predicate/matches`              | ❌     | *(out of scope)*                  | Predicate factory — `(v) => isObjectMatching(v, source)`; shorthand-iteratee machinery               |
| `predicate/matchesProperty`      | ❌     | *(out of scope)*                  | Predicate factory — `(v) => isEqual(getByPath(v, path), value)`; shorthand-iteratee machinery        |
| `string/endsWith`                | ❌     | *(native)*                        | Use `string.endsWith(...)`                                                                           |
| `string/padEnd`                  | ❌     | *(native)*                        | Use `string.padEnd(...)`                                                                             |
| `string/padStart`                | ❌     | *(native)*                        | Use `string.padStart(...)`                                                                           |
| `string/repeat`                  | ❌     | *(native)*                        | Use `string.repeat(n)`                                                                               |
| `string/replace`                 | ❌     | *(native)*                        | Use `string.replace(...)` / `replaceAll`                                                             |
| `string/split`                   | ❌     | *(native)*                        | Use `string.split(...)`                                                                              |
| `string/startsWith`              | ❌     | *(native)*                        | Use `string.startsWith(...)`                                                                         |
| `string/template`                | ❓     | TBD                               | String-templating engine; `Function`-construction / CSP concerns                                     |
| `string/templateSettings`        | ❓     | TBD                               | Configuration for `template`                                                                         |
| `string/toLower`                 | ❌     | *(native)*                        | Use `string.toLowerCase()`                                                                           |
| `string/toUpper`                 | ❌     | *(native)*                        | Use `string.toUpperCase()`                                                                           |
| `string/truncate`                | ⌛     | `string/truncate`                 | Length + omission + word/regex separator-boundary truncation                                         |
| `util/bindAll`                   | ❌     | *(legacy)*                        | Bind methods in place — use class fields / arrow methods                                             |
| `util/cond`                      | ❓     | TBD                               | Predicate→action pair dispatcher                                                                     |
| `util/constant`                  | ❌     | *(native)*                        | Use `() => value`                                                                                    |
| `util/defaultTo`                 | ❌     | *(native)*                        | Use `value ?? fallback`                                                                              |
| `util/eq`                        | ❌     | *(native)*                        | Use `Object.is(a, b)` / `===`                                                                        |
| `util/gt`                        | ❌     | *(native)*                        | Use `a > b`                                                                                          |
| `util/gte`                       | ❌     | *(native)*                        | Use `a >= b`                                                                                         |
| `util/invoke`                    | ❓     | TBD                               | Invoke a method at a deep path                                                                       |
| `util/iteratee`                  | ❌     | *(out of scope)*                  | The shorthand-iteratee builder — explicitly out of scope for this library                            |
| `util/lt`                        | ❌     | *(native)*                        | Use `a < b`                                                                                          |
| `util/lte`                       | ❌     | *(native)*                        | Use `a <= b`                                                                                         |
| `util/method`                    | ❓     | TBD                               | Returns a function invoking a method at a path                                                       |
| `util/methodOf`                  | ❓     | TBD                               | Inverted `method`                                                                                    |
| `util/now`                       | ❌     | *(native)*                        | Use `Date.now()`                                                                                     |
| `util/over`                      | ❓     | TBD                               | Run a value through several funcs, collecting results                                                |
| `util/overEvery`                 | ✅     | `function/everyPredicate`         | Renamed; predicates joined with `&&` (short-circuiting)                                              |
| `util/overSome`                  | ✅     | `function/somePredicate`          | Renamed; predicates joined with `\|\|` (short-circuiting)                                            |
| `util/stubArray`                 | ❌     | *(native)*                        | Use `() => []`                                                                                       |
| `util/stubFalse`                 | ❌     | *(native)*                        | Use `() => false`                                                                                    |
| `util/stubObject`                | ❌     | *(native)*                        | Use `() => ({})`                                                                                     |
| `util/stubString`                | ❌     | *(native)*                        | Use `() => ''`                                                                                       |
| `util/stubTrue`                  | ❌     | *(native)*                        | Use `() => true`                                                                                     |
| `util/times`                     | ✅     | `function/mapTimes`               | Renamed; iteratee required, clearer than `Array.from({length}, ...)`                                 |
| `util/toArray`                   | ❌     | *(native)*                        | Use `Array.from(x)` / spread                                                                         |
| `util/toFinite`                  | ❌     | *(native)*                        | Coercion — use `Number(x)`                                                                           |
| `util/toInteger`                 | ❌     | *(native)*                        | Use `Math.trunc(Number(x))`                                                                          |
| `util/toLength`                  | ❌     | *(native)*                        | Coercion — rarely needed                                                                             |
| `util/toNumber`                  | ❌     | *(native)*                        | Use `Number(x)`                                                                                      |
| `util/toPath`                    | ✅     | `object/toPathSegments`           | Renamed for clarity — parses a path string into an array of segments                                 |
| `util/toPlainObject`             | ❌     | *(legacy)*                        | Flattens inherited props — niche                                                                     |
| `util/toSafeInteger`             | ❌     | *(native)*                        | Coercion — rarely needed                                                                             |
| `util/toString`                  | ❌     | *(native)*                        | Use `String(x)`                                                                                      |
| `util/uniqueId`                  | ❓     | TBD                               | Counter-based id; module-global state is a design question                                           |

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

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

<!-- eslint-enable markdown-preferences/padding-line-between-blocks, markdown/require-alt-text -->