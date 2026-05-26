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

## `es-toolkit`

| Original function group and name | Status | Our function group and name       | Notes                                                                                 |
| -------------------------------- | ------ | --------------------------------- | ------------------------------------------------------------------------------------- |
| `array/at`                       | ✅     | `array/arrayAtMulti`              | Extended to support a single array index                                              |
| `array/cartesianProduct`         | ✅     | `array/cartesianProduct` *(same)* | -                                                                                     |
| `array/chunk`                    | ✅     | `array/arrayChunks`               | -                                                                                     |
| `array/combinations`             | ✅     | `array/arrayCombinations`         | -                                                                                     |
| `array/compact`                  | ✅     | `array/arrayWithoutFalsy`         | -                                                                                     |
| `array/difference`               | ✅     | `array/arrayDifference`           | Consolidated with `differenceBy`/`differenceWith`                                     |
| `array/differenceBy`             | ✅     | `array/arrayDifference`           | Pass a mapper `(value) => key` as third arg                                           |
| `array/differenceWith`           | ✅     | `array/arrayDifference`           | Pass a comparator `(a, b) => boolean` as third arg                                    |
| `array/drop`                     | ✅     | `array/arrayDrop`                 | Consolidated with `dropWhile`                                                         |
| `array/dropRight`                | ✅     | `array/arrayDropRight`            | Consolidated with `dropRightWhile`                                                    |
| `array/dropRightWhile`           | ✅     | `array/arrayDropRight`            | Pass a predicate `(item) => boolean` as second arg                                    |
| `array/dropWhile`                | ✅     | `array/arrayDrop`                 | Pass a predicate `(item) => boolean` as second arg                                    |
| `array/fill`                     | ✅     | `array/arrayFill`                 | Consolidated with `toFilled`                                                          |
| `array/filterAsync`              | ✅     | `array/filterAsync` *(same)*      | -                                                                                     |
| `array/flatMap`                  | ✅     | `array/flatMap` *(same)*          | Defaults to deep flattening; pass a finite `depth` as third arg for a specific level  |
| `array/flatMapAsync`             | ✅     | `array/flatMapAsync` *(same)*     | -                                                                                     |
| `array/flatMapDeep`              | ✅     | `array/flatMap`                   | Call without a `depth` argument (or with `Infinity`)                                  |
| `array/flatten`                  | ✅     | `array/flatten` *(same)*          | Defaults to deep flattening; pass a finite `depth` as second arg for a specific level |
| `array/flattenDeep`              | ✅     | `array/flatten`                   | Call without a `depth` argument (or with `Infinity`)                                  |
| `array/forEachAsync`             | ✅     | `array/forEachAsync` *(same)*     | -                                                                                     |
| `array/forEachRight`             | ✅     | `array/forEachRight` *(same)*     | -                                                                                     |
| `array/groupBy`                  | ❌     | *(native)*                        | Use the native `Object.groupBy` / `Map.groupBy`                                       |
| `array/head`                     | ❌     | *(native)*                        | Use `array[0]` or `array.at(0)`                                                       |
| `array/initial`                  | ❌     | *(native)*                        | Use `array.slice(0, -1)`                                                              |
| `array/intersection`             | ✅     | `array/arrayIntersection`         | Consolidated with `intersectionBy`/`intersectionWith`                                 |
| `array/intersectionBy`           | ✅     | `array/arrayIntersection`         | Pass a mapper `(value) => key` as third arg                                           |
| `array/intersectionWith`         | ✅     | `array/arrayIntersection`         | Pass a comparator `(a, b) => boolean` as third arg                                    |
| `array/isSubset`                 | ✅     | `array/arrayIsSubset`             | Consolidated with `isSubsetWith` and a custom mapper-based variant                    |
| `array/isSubsetWith`             | ✅     | `array/arrayIsSubset`             | Pass a comparator `(a, b) => boolean` as third arg                                    |
| `array/keyBy`                    | ✅     | `iterable/keyedBy`                | -                                                                                     |
| `array/last`                     | ❌     | *(native)*                        | Use `array.at(-1)`                                                                    |
| `array/limitAsync`               | ✅     | `function/withConcurrencyLimit`   | -                                                                                     |
| `array/mapAsync`                 | ✅     | `array/mapAsync` *(same)*         | -                                                                                     |
| `array/maxBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/minBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/orderBy`                  | ⌛     | TBD                               | -                                                                                     |
| `array/partition`                | ⌛     | TBD                               | -                                                                                     |
| `array/pull`                     | ⌛     | TBD                               | -                                                                                     |
| `array/pullAt`                   | ❌     | *(native)*                        | Use `array.splice(index, 1)`; for multiple indices, splice in descending order        |
| `array/reduceAsync`              | ⌛     | TBD                               | -                                                                                     |
| `array/remove`                   | ❌     | *(native)*                        | Iterate in reverse with `array.splice(i, 1)` when the predicate matches               |
| `array/sample`                   | ⌛     | TBD                               | -                                                                                     |
| `array/sampleSize`               | ⌛     | TBD                               | -                                                                                     |
| `array/shuffle`                  | ⌛     | TBD                               | -                                                                                     |
| `array/sortBy`                   | ⌛     | TBD                               | -                                                                                     |
| `array/tail`                     | ⌛     | TBD                               | -                                                                                     |
| `array/take`                     | ❌     | *(native)*                        | Use `array.slice(0, n)`                                                               |
| `array/takeRight`                | ❌     | *(native)*                        | Use `array.slice(-n)`                                                                 |
| `array/takeRightWhile`           | ⌛     | TBD                               | -                                                                                     |
| `array/takeWhile`                | ⌛     | TBD                               | -                                                                                     |
| `array/toFilled`                 | ✅     | `array/arrayFill`                 | Pass `{copy: true}` as fifth arg                                                      |
| `array/union`                    | ⌛     | TBD                               | -                                                                                     |
| `array/unionBy`                  | ⌛     | TBD                               | -                                                                                     |
| `array/unionWith`                | ⌛     | TBD                               | -                                                                                     |
| `array/uniq`                     | ❌     | *(native)*                        | Use `Array.from(new Set(array))`                                                      |
| `array/uniqBy`                   | ⌛     | TBD                               | -                                                                                     |
| `array/uniqWith`                 | ⌛     | TBD                               | -                                                                                     |
| `array/unzip`                    | ⌛     | TBD                               | -                                                                                     |
| `array/unzipWith`                | ⌛     | TBD                               | -                                                                                     |
| `array/windowed`                 | ⌛     | TBD                               | -                                                                                     |
| `array/without`                  | ⌛     | TBD                               | -                                                                                     |
| `array/xor`                      | ⌛     | TBD                               | -                                                                                     |
| `array/xorBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/xorBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/zip`                      | ⌛     | TBD                               | -                                                                                     |
| `array/zipObject`                | ⌛     | TBD                               | -                                                                                     |
| `array/zipWith`                  | ⌛     | TBD                               | -                                                                                     |
| `array/countBy`                  | ✅     | `iterable/countBy`                | -                                                                                     |
| `map/countBy`                    | ✅     | `iterable/countBy`                | -                                                                                     |
| `set/countBy`                    | ✅     | `iterable/countBy`                | -                                                                                     |
| `map/keyBy`                      | ✅     | `iterable/keyedBy`                | -                                                                                     |
| `set/keyBy`                      | ✅     | `iterable/keyedBy`                | -                                                                                     |
