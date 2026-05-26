# Readme

**Legend**:

- ✅ - implemented
- ⌛ - to be implemented
- ❓ - under consideration

## Custom functions

| Our function group and name | Notes |
| --------------------------- | ----- |
| `iterable/countBy`          | -     |

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
| `array/forEachRight`             | ⌛     | TBD                               | -                                                                                     |
| `array/groupBy`                  | ⌛     | TBD                               | -                                                                                     |
| `array/head`                     | ⌛     | TBD                               | -                                                                                     |
| `array/initial`                  | ⌛     | TBD                               | -                                                                                     |
| `array/intersection`             | ✅     | `array/arrayIntersection`         | Consolidated with `intersectionBy`/`intersectionWith`                                 |
| `array/intersectionBy`           | ✅     | `array/arrayIntersection`         | Pass a mapper `(value) => key` as third arg                                           |
| `array/intersectionWith`         | ✅     | `array/arrayIntersection`         | Pass a comparator `(a, b) => boolean` as third arg                                    |
| `array/isSubset`                 | ⌛     | TBD                               | -                                                                                     |
| `array/isSubsetWith`             | ⌛     | TBD                               | -                                                                                     |
| `array/keyBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/last`                     | ⌛     | TBD                               | -                                                                                     |
| `array/limitAsync`               | ⌛     | TBD                               | -                                                                                     |
| `array/mapAsync`                 | ⌛     | TBD                               | -                                                                                     |
| `array/maxBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/minBy`                    | ⌛     | TBD                               | -                                                                                     |
| `array/orderBy`                  | ⌛     | TBD                               | -                                                                                     |
| `array/partition`                | ⌛     | TBD                               | -                                                                                     |
| `array/pull`                     | ⌛     | TBD                               | -                                                                                     |
| `array/pullAt`                   | ⌛     | TBD                               | -                                                                                     |
| `array/reduceAsync`              | ⌛     | TBD                               | -                                                                                     |
| `array/remove`                   | ⌛     | TBD                               | -                                                                                     |
| `array/sample`                   | ⌛     | TBD                               | -                                                                                     |
| `array/sampleSize`               | ⌛     | TBD                               | -                                                                                     |
| `array/shuffle`                  | ⌛     | TBD                               | -                                                                                     |
| `array/sortBy`                   | ⌛     | TBD                               | -                                                                                     |
| `array/tail`                     | ⌛     | TBD                               | -                                                                                     |
| `array/take`                     | ⌛     | TBD                               | -                                                                                     |
| `array/takeRight`                | ⌛     | TBD                               | -                                                                                     |
| `array/takeRightWhile`           | ⌛     | TBD                               | -                                                                                     |
| `array/takeWhile`                | ⌛     | TBD                               | -                                                                                     |
| `array/toFilled`                 | ✅     | `array/arrayFill`                 | Pass `{copy: true}` as fifth arg                                                      |
| `array/union`                    | ⌛     | TBD                               | -                                                                                     |
| `array/unionBy`                  | ⌛     | TBD                               | -                                                                                     |
| `array/unionWith`                | ⌛     | TBD                               | -                                                                                     |
| `array/uniq`                     | ⌛     | TBD                               | -                                                                                     |
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
