# Readme

**Legend**:

- ✅ - implemented
- ⌛ - to be implemented
- ❓ - under consideration
- ❌ - won't be added (see notes)

## Custom functions

| Our function group and name | Notes |
| --------------------------- | ----- |
| `iterable/countBy`          | -     |
| `iterable/keyedBy`          | -     |
| `iterable/slidingWindow`    | -     |

## `es-toolkit`

| Original function group and name | Status | Our function group and name       | Notes                                                                                    |
| -------------------------------- | ------ | --------------------------------- | ---------------------------------------------------------------------------------------- |
| `array/at`                       | ✅     | `array/arrayAtMulti`              | Extended to support a single array index                                                 |
| `array/cartesianProduct`         | ✅     | `array/cartesianProduct` *(same)* | -                                                                                        |
| `array/chunk`                    | ✅     | `array/arrayChunks`               | -                                                                                        |
| `array/combinations`             | ✅     | `array/arrayCombinations`         | -                                                                                        |
| `array/compact`                  | ✅     | `array/arrayWithoutFalsy`         | -                                                                                        |
| `array/countBy`                  | ✅     | `iterable/countBy`                | -                                                                                        |
| `array/differenceBy`             | ✅     | `array/arrayDifference`           | Pass a mapper `(value) => key` as third arg                                              |
| `array/differenceWith`           | ✅     | `array/arrayDifference`           | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/difference`               | ✅     | `array/arrayDifference`           | Consolidated with `differenceBy`/`differenceWith`                                        |
| `array/dropRightWhile`           | ✅     | `array/arrayDropRight`            | Pass a predicate `(item) => boolean` as second arg                                       |
| `array/dropRight`                | ✅     | `array/arrayDropRight`            | Consolidated with `dropRightWhile`                                                       |
| `array/dropWhile`                | ✅     | `array/arrayDrop`                 | Pass a predicate `(item) => boolean` as second arg                                       |
| `array/drop`                     | ✅     | `array/arrayDrop`                 | Consolidated with `dropWhile`                                                            |
| `array/fill`                     | ✅     | `array/arrayFill`                 | Consolidated with `toFilled`                                                             |
| `array/filterAsync`              | ✅     | `array/filterAsync` *(same)*      | -                                                                                        |
| `array/flatMapAsync`             | ✅     | `array/flatMapAsync` *(same)*     | -                                                                                        |
| `array/flatMapDeep`              | ✅     | `array/flatMap`                   | Call without a `depth` argument (or with `Infinity`)                                     |
| `array/flatMap`                  | ✅     | `array/flatMap` *(same)*          | Defaults to deep flattening; pass a finite `depth` as third arg for a specific level     |
| `array/flattenDeep`              | ✅     | `array/flatten`                   | Call without a `depth` argument (or with `Infinity`)                                     |
| `array/flatten`                  | ✅     | `array/flatten` *(same)*          | Defaults to deep flattening; pass a finite `depth` as second arg for a specific level    |
| `array/forEachAsync`             | ✅     | `array/forEachAsync` *(same)*     | -                                                                                        |
| `array/forEachRight`             | ✅     | `array/forEachRight` *(same)*     | -                                                                                        |
| `array/groupBy`                  | ❌     | *(native)*                        | Use the native `Object.groupBy` / `Map.groupBy`                                          |
| `array/head`                     | ❌     | *(native)*                        | Use `array[0]` or `array.at(0)`                                                          |
| `array/initial`                  | ❌     | *(native)*                        | Use `array.slice(0, -1)`                                                                 |
| `array/intersectionBy`           | ✅     | `array/arrayIntersection`         | Pass a mapper `(value) => key` as third arg                                              |
| `array/intersectionWith`         | ✅     | `array/arrayIntersection`         | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/intersection`             | ✅     | `array/arrayIntersection`         | Consolidated with `intersectionBy`/`intersectionWith`                                    |
| `array/isSubsetWith`             | ✅     | `array/arrayIsSubset`             | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/isSubset`                 | ✅     | `array/arrayIsSubset`             | Consolidated with `isSubsetWith` and a custom mapper-based variant                       |
| `array/keyBy`                    | ✅     | `iterable/keyedBy`                | -                                                                                        |
| `array/last`                     | ❌     | *(native)*                        | Use `array.at(-1)`                                                                       |
| `array/limitAsync`               | ✅     | `function/withConcurrencyLimit`   | -                                                                                        |
| `array/mapAsync`                 | ✅     | `array/mapAsync` *(same)*         | -                                                                                        |
| `array/maxBy`                    | ✅     | `array/maxBy` *(same)*            | -                                                                                        |
| `array/minBy`                    | ✅     | `array/minBy` *(same)*            | -                                                                                        |
| `array/orderBy`                  | ✅     | `array/orderBy` *(same)*          | -                                                                                        |
| `array/partition`                | ✅     | `array/arrayPartition`            | -                                                                                        |
| `array/pullAt`                   | ✅     | `array/arrayPurgeIndexes`         | Renamed for clarity — mutates the input, removing elements at the given indices          |
| `array/pull`                     | ✅     | `array/arrayPurgeValues`          | Renamed for clarity — mutates the input, removing every occurrence of the given values   |
| `array/reduceAsync`              | ✅     | `array/reduceAsync` *(same)*      | -                                                                                        |
| `array/remove`                   | ✅     | `array/arrayPurgeBy`              | Renamed for clarity — mutates the input, removing elements matching the predicate        |
| `array/sampleSize`               | ✅     | `array/arraySample`               | Pass the desired sample size as second arg                                               |
| `array/sample`                   | ✅     | `array/arraySample`               | Consolidated with `sampleSize`                                                           |
| `array/shuffle`                  | ✅     | `array/arrayShuffle`              | -                                                                                        |
| `array/sortBy`                   | ✅     | `array/sortBy` *(same)*           | -                                                                                        |
| `array/tail`                     | ⌛     | TBD                               | -                                                                                        |
| `array/takeRightWhile`           | ✅     | `array/arrayTakeWhile`            | Pass `true` as third arg to walk from the end                                            |
| `array/takeRight`                | ❌     | *(native)*                        | Use `array.slice(-n)`                                                                    |
| `array/takeWhile`                | ✅     | `array/arrayTakeWhile`            | Consolidated with `takeRightWhile`                                                       |
| `array/take`                     | ❌     | *(native)*                        | Use `array.slice(0, n)`                                                                  |
| `array/toFilled`                 | ✅     | `array/arrayFill`                 | Pass `{copy: true}` as fifth arg                                                         |
| `array/unionBy`                  | ✅     | `array/arrayUnion`                | Pass a mapper `(value) => key` as third arg                                              |
| `array/unionWith`                | ✅     | `array/arrayUnion`                | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/union`                    | ✅     | `array/arrayUnion`                | Consolidated with `unionBy`/`unionWith`                                                  |
| `array/uniqBy`                   | ✅     | `array/arrayUnique`               | Pass a mapper `(value) => key` as second arg                                             |
| `array/uniqWith`                 | ✅     | `array/arrayUnique`               | Pass a comparator `(a, b) => boolean` as second arg                                      |
| `array/uniq`                     | ✅     | `array/arrayUnique`               | Consolidated with `uniqBy`/`uniqWith`                                                    |
| `array/unzipWith`                | ✅     | `array/arrayTranspose`            | Pass an iteratee `(...column) => value` as second arg                                    |
| `array/unzip`                    | ✅     | `array/arrayTranspose`            | Renamed to match the math/CS term — same operation, broader recognition                  |
| `array/windowed`                 | ✅     | `iterable/slidingWindow`          | Generalized to any iterable and returns a lazy generator; accepts the same options       |
| `array/without`                  | ✅     | `array/arrayDifference`           | Pass the values to exclude as an array                                                   |
| `array/xorBy`                    | ✅     | `array/arraySymmetricDifference`  | Pass a mapper `(value) => key` as third arg                                              |
| `array/xorWith`                  | ✅     | `array/arraySymmetricDifference`  | Pass a comparator `(a, b) => boolean` as third arg                                       |
| `array/xor`                      | ✅     | `array/arraySymmetricDifference`  | Consolidated with `xorBy`/`xorWith`; renamed to the set-theory term                      |
| `array/zipObject`                | ❌     | *(native)*                        | Use `Object.fromEntries(keys.map((key, index) => [key, values[index]]))`                 |
| `array/zipWith`                  | ✅     | `array/arrayTranspose`            | Wrap the arguments in an array; pass an iteratee `(...column) => value` as second arg    |
| `array/zip`                      | ✅     | `array/arrayTranspose`            | Wrap the arguments in an array: `arrayTranspose([arr1, arr2, ...])` — same operation     |
| `function/after`                 | ✅     | `function/fromNthCall`            | Renamed to avoid the temporal-sounding `after`; ordinal semantics (calls 1..n-1 skipped) |
| `function/ary`                   | ✅     | `function/withMaxArity`           | Renamed to spell out the operation (cap forwarded args at `n`); avoids the cryptic `ary` |
| `function/asyncNoop`             | ⌛️     | `function/noopAsync`              | -                                                                                        |
| `function/before`                | ✅     | `function/untilNthCall`           | Renamed to avoid the temporal-sounding `before`; ordinal semantics (calls 1..n-1 fire)   |
| `function/curryRight`            | ⌛️     | `function/curryRight`             | -                                                                                        |
| `function/curry`                 | ⌛️     | `function/curry`                  | -                                                                                        |
| `function/debounce`              | ⌛️     | `function/debounce`               | -                                                                                        |
| `function/flowRight`             | ⌛️     | `function/flowRight`              | -                                                                                        |
| `function/flow`                  | ⌛️     | `function/flow`                   | -                                                                                        |
| `function/identity`              | ⌛️     | `function/identity`               | -                                                                                        |
| `function/memoize`               | ⌛️     | `function/memoize`                | -                                                                                        |
| `function/negate`                | ⌛️     | `function/negate`                 | -                                                                                        |
| `function/noop`                  | ⌛️     | `function/noop`                   | -                                                                                        |
| `function/once`                  | ⌛️     | `function/once`                   | -                                                                                        |
| `function/partialRight`          | ⌛️     | `function/partialRight`           | -                                                                                        |
| `function/partial`               | ⌛️     | `function/partial`                | -                                                                                        |
| `function/rest`                  | ⌛️     | `function/rest`                   | -                                                                                        |
| `function/retry`                 | ⌛️     | `function/retry`                  | -                                                                                        |
| `function/spread`                | ⌛️     | `function/spread`                 | -                                                                                        |
| `function/throttle`              | ⌛️     | `function/throttle`               | -                                                                                        |
| `function/unary`                 | ❌     | *(use `withMaxArity`)*            | Just `ary(fn, 1)` — call `withMaxArity(fn, 1)` instead                                   |
| `map/countBy`                    | ✅     | `iterable/countBy`                | -                                                                                        |
| `map/every`                      | ⌛️     | `map/every`                       | -                                                                                        |
| `map/filter`                     | ⌛️     | `map/filter`                      | -                                                                                        |
| `map/findKey`                    | ⌛️     | `map/findKey`                     | -                                                                                        |
| `map/findValue`                  | ⌛️     | `map/findValue`                   | -                                                                                        |
| `map/forEach`                    | ⌛️     | `map/forEach`                     | -                                                                                        |
| `map/hasValue`                   | ⌛️     | `map/hasValue`                    | -                                                                                        |
| `map/keyBy`                      | ✅     | `iterable/keyedBy`                | -                                                                                        |
| `map/mapKeys`                    | ⌛️     | `map/mapKeys`                     | -                                                                                        |
| `map/mapValues`                  | ⌛️     | `map/mapValues`                   | -                                                                                        |
| `map/reduce`                     | ⌛️     | `map/reduce`                      | -                                                                                        |
| `map/some`                       | ⌛️     | `map/some`                        | -                                                                                        |
| `math/clamp`                     | ✅     | `math/clamp` *(same)*             | -                                                                                        |
| `math/inRange`                   | ✅     | `math/isInRange`                  | Renamed for clarity — same exclusive-upper-bound semantics                               |
| `math/meanBy`                    | ✅     | `math/mean`                       | Pass a selector `(item) => number` as second arg                                         |
| `math/mean`                      | ✅     | `math/mean` *(same)*              | Consolidated with `meanBy`                                                               |
| `math/medianBy`                  | ✅     | `math/median`                     | Pass a selector `(item) => number` as second arg                                         |
| `math/median`                    | ✅     | `math/median` *(same)*            | Consolidated with `medianBy`                                                             |
| `math/percentile`                | ✅     | `math/percentile` *(same)*        | -                                                                                        |
| `math/randomInt`                 | ✅     | `math/randomInt` *(same)*         | -                                                                                        |
| `math/random`                    | ✅     | `math/random` *(same)*            | -                                                                                        |
| `math/rangeRight`                | ✅     | `math/rangeRight` *(same)*        | -                                                                                        |
| `math/range`                     | ✅     | `math/range` *(same)*             | -                                                                                        |
| `math/round`                     | ✅     | `math/round` *(same)*             | -                                                                                        |
| `math/sumBy`                     | ✅     | `math/sum`                        | Pass a selector `(item, index) => number` as second arg                                  |
| `math/sum`                       | ✅     | `math/sum` *(same)*               | Consolidated with `sumBy`                                                                |
| `predicate/isArrayBuffer`        | ❌     | *(native)*                        | Use `x instanceof ArrayBuffer`                                                           |
| `predicate/isBlob`               | ⌛️     | `predicates/isBlob`               | -                                                                                        |
| `predicate/isBoolean`            | ❌     | *(native)*                        | Use `typeof x === 'boolean'`                                                             |
| `predicate/isBrowser`            | ⌛️     | `predicates/isBrowser`            | -                                                                                        |
| `predicate/isBuffer`             | ⌛️     | `predicates/isBuffer`             | -                                                                                        |
| `predicate/isDate`               | ❌     | *(native)*                        | Use `x instanceof Date`                                                                  |
| `predicate/isEmptyObject`        | ⌛️     | `predicates/isEmptyObject`        | -                                                                                        |
| `predicate/isEqual`              | ⌛️     | `predicates/isEqual`              | -                                                                                        |
| `predicate/isEqualWith`          | ⌛️     | `predicates/isEqualWith`          | -                                                                                        |
| `predicate/isError`              | ❌     | *(native)*                        | Use `Error.isError(x)` or `x instanceof Error`                                           |
| `predicate/isFile`               | ⌛️     | `predicates/isFile`               | -                                                                                        |
| `predicate/isFunction`           | ❌     | *(native)*                        | Use `typeof x === 'function'`                                                            |
| `predicate/isJSON`               | ⌛️     | `predicates/isJSON`               | -                                                                                        |
| `predicate/isJSONValue`          | ⌛️     | `predicates/isJSONValue`          | -                                                                                        |
| `predicate/isJSONArray`          | ⌛️     | `predicates/isJSONArray`          | -                                                                                        |
| `predicate/isJSONObject`         | ⌛️     | `predicates/isJSONObject`         | -                                                                                        |
| `predicate/isLength`             | ⌛️     | `predicates/isLength`             | -                                                                                        |
| `predicate/isMap`                | ❌     | *(native)*                        | Use `x instanceof Map`                                                                   |
| `predicate/isNil`                | ❌     | *(native)*                        | Use `x == null`                                                                          |
| `predicate/isNode`               | ⌛️     | `predicates/isNode`               | -                                                                                        |
| `predicate/isNotNil`             | ❌     | *(native)*                        | Use `x != null`                                                                          |
| `predicate/isNull`               | ❌     | *(native)*                        | Use `x === null`                                                                         |
| `predicate/isNumber`             | ❌     | *(native)*                        | Use `typeof x === 'number'`                                                              |
| `predicate/isPlainObject`        | ⌛️     | `predicates/isPlainObject`        | -                                                                                        |
| `predicate/isPrimitive`          | ⌛️     | `predicates/isPrimitive`          | -                                                                                        |
| `predicate/isPromise`            | ❌     | *(native)*                        | Use `x instanceof Promise`                                                               |
| `predicate/isRegExp`             | ❌     | *(native)*                        | Use `x instanceof RegExp`                                                                |
| `predicate/isSet`                | ❌     | *(native)*                        | Use `x instanceof Set`                                                                   |
| `predicate/isString`             | ❌     | *(native)*                        | Use `typeof x === 'string'`                                                              |
| `predicate/isSymbol`             | ❌     | *(native)*                        | Use `typeof x === 'symbol'`                                                              |
| `predicate/isTypedArray`         | ⌛️     | `predicates/isTypedArray`         | -                                                                                        |
| `predicate/isUndefined`          | ❌     | *(native)*                        | Use `typeof x === 'undefined'` or `x === undefined`                                      |
| `predicate/isWeakMap`            | ❌     | *(native)*                        | Use `x instanceof WeakMap`                                                               |
| `predicate/isWeakSet`            | ❌     | *(native)*                        | Use `x instanceof WeakSet`                                                               |
| `promise/allKeyed`               | ⌛️     | ?                                 | -                                                                                        |
| `promise/delay`                  | ⌛️     | ?                                 | -                                                                                        |
| `promise/Muted`                  | ⌛️     | ?                                 | -                                                                                        |
| `promise/Semaphore`              | ⌛️     | ?                                 | -                                                                                        |
| `promise/timeout`                | ⌛️     | ?                                 | -                                                                                        |
| `promise/withTimeout`            | ⌛️     | ?                                 | -                                                                                        |
| `object/cloneDeepWith`           | ✅     | `value/cloneDeep`                 | Pass a customizer `(value, key, root, stack) => unknown` as second arg                   |
| `object/cloneDeep`               | ✅     | `value/cloneDeep`                 | Consolidated with `cloneDeepWith`                                                        |
| `object/clone`                   | ✅     | `value/cloneShallow`              | Renamed for clarity — it shallow-clones any value, not only objects                      |
| `object/findKey`                 | ⌛️     | `object/findKey`                  | -                                                                                        |
| `object/flattenObject`           | ⌛️     | `object/flattenObject`            | -                                                                                        |
| `object/invert`                  | ⌛️     | `object/invert`                   | -                                                                                        |
| `object/mapKeys`                 | ⌛️     | `object/mapKeys`                  | -                                                                                        |
| `object/mapValues`               | ⌛️     | `object/mapValues`                | -                                                                                        |
| `object/merge`                   | ⌛️     | `object/merge`                    | -                                                                                        |
| `object/mergeWith`               | ⌛️     | `object/mergeWith`                | -                                                                                        |
| `object/omit`                    | ⌛️     | `object/omit`                     | -                                                                                        |
| `object/omitBy`                  | ⌛️     | `object/omitBy`                   | -                                                                                        |
| `object/pick`                    | ⌛️     | `object/pick`                     | -                                                                                        |
| `object/pickBy`                  | ⌛️     | `object/pickBy`                   | -                                                                                        |
| `object/sortKeys`                | ⌛️     | `object/sortKeys`                 | -                                                                                        |
| `object/toCamelCaseKeys`         | ⌛️     | `object/toCamelCaseKeys`          | -                                                                                        |
| `object/toMerged`                | ⌛️     | `object/toMerged`                 | -                                                                                        |
| `object/toSnakeCaseKeys`         | ⌛️     | `object/toSnakeCaseKeys`          | -                                                                                        |
| `set/countBy`                    | ✅     | `iterable/countBy`                | -                                                                                        |
| `set/every`                      | ⌛️     | `set/every`                       | -                                                                                        |
| `set/filter`                     | ⌛️     | `set/filter`                      | -                                                                                        |
| `set/find`                       | ⌛️     | `set/find`                        | -                                                                                        |
| `set/forEach`                    | ⌛️     | `set/forEach`                     | -                                                                                        |
| `set/keyBy`                      | ✅     | `iterable/keyedBy`                | -                                                                                        |
| `set/map`                        | ⌛️     | `set/mapKeys`                     | -                                                                                        |
| `set/reduce`                     | ⌛️     | `set/reduce`                      | -                                                                                        |
| `set/some`                       | ⌛️     | `set/some`                        | -                                                                                        |
| `string/camelCase`               | ✅     | `string/toCamelCase`              | -                                                                                        |
| `string/capitalize`              | ✅     | `string/capitalize` *(same)*      | -                                                                                        |
| `string/constantCase`            | ✅     | `string/toConstantCase`           | -                                                                                        |
| `string/deburr`                  | ✅     | `string/deburr` *(same)*          | -                                                                                        |
| `string/escape`                  | ✅     | `string/escapeHtml`               | Renamed for clarity — handles HTML entities specifically                                 |
| `string/escapeRegExp`            | ✅     | `string/escapeRegExp` *(same)*    | -                                                                                        |
| `string/kebabCase`               | ✅     | `string/toKebabCase`              | -                                                                                        |
| `string/lowerCase`               | ✅     | `string/toLowerCase`              | -                                                                                        |
| `string/lowerFirst`              | ✅     | `string/lowerFirst` *(same)*      | -                                                                                        |
| `string/pad`                     | ✅     | `string/stringPad`                | Pads both sides; use native `padStart` / `padEnd` for one-sided padding                  |
| `string/pascalCase`              | ✅     | `string/toPascalCase`             | -                                                                                        |
| `string/reverseString`           | ✅     | `string/stringReverse`            | -                                                                                        |
| `string/snakeCase`               | ✅     | `string/toSnakeCase`              | -                                                                                        |
| `string/startCase`               | ✅     | `string/toStartCase`              | -                                                                                        |
| `string/trim`                    | ❌     | *(native)*                        | Use `string.trim()`                                                                      |
| `string/trimEnd`                 | ❌     | *(native)*                        | Use `string.trimEnd()`                                                                   |
| `string/trimStart`               | ❌     | *(native)*                        | Use `string.trimStart()`                                                                 |
| `string/unescape`                | ✅     | `string/unescapeHtml`             | Renamed for clarity — handles HTML entities specifically                                 |
| `string/upperCase`               | ✅     | `string/toUpperCase`              | -                                                                                        |
| `string/upperFirst`              | ✅     | `string/upperFirst` *(same)*      | -                                                                                        |
| `string/words`                   | ✅     | `string/toWords`                  | -                                                                                        |
