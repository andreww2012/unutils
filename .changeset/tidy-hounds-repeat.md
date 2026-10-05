---
'unutils': minor
---

Updated [`devalue` from v5.8.1 to v6.0.2](https://github.com/sveltejs/devalue/compare/v5.8.1...v6.0.2)

Added the following new utilities from [`devalue`](https://npmx.dev/devalue) package (`json` group):

- `structuredStringifyAsync` (renamed `stringifyAsync`) - the promise-awaiting counterpart of `structuredStringify`
- `StructuredStringifyError` (renamed `DevalueError`) - thrown by `structuredStringify` and `structuredStringifyAsync`
- `structuredFilterArrayIndexes` (renamed `filterArrayIndices`) - for custom `StructuredStringifyOperations`
- `STRUCTURED_STRINGIFY_DEFAULT_OPERATIONS` (constant, renamed `defaultStringifyOperations`) - default `operations` of `structuredStringify` and `structuredStringifyAsync`
- `STRUCTURED_PARSE_DEFAULT_OPERATIONS` (constant, renamed `defaultParseOperations`) - default `operations` of `structuredParse`
- `StructuredStringifyOptions` (type, renamed `StringifyOptions`) - options of `structuredStringify` and `structuredStringifyAsync`
- `StructuredStringifyOperations` (type, renamed `StringifyOperations`) - `operations` option of `structuredStringify` and `structuredStringifyAsync`
- `StructuredParseOptions` (type, renamed `ParseOptions`) - options of `structuredParse`
- `StructuredParseOperations` (type, renamed `ParseOperations`) - `operations` option of `structuredParse`
