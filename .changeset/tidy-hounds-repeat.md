---
'unutils': minor
---

Updated [`devalue` from v5.8.1 to v6.0.2](https://github.com/sveltejs/devalue/compare/v5.8.1...v6.0.2)

Added the following new utilities from [`devalue`](https://npmx.dev/devalue) package (`json` group):

- `structuredStringifyAsync` (renamed from `stringifyAsync`) - the promise-awaiting counterpart of `structuredStringify`
- `StructuredStringifyError` (renamed from `DevalueError`) - thrown by `structuredStringify` and `structuredStringifyAsync`
- `structuredFilterArrayIndexes` (renamed from `filterArrayIndices`) - for custom `StructuredStringifyOperations`
- `STRUCTURED_STRINGIFY_DEFAULT_OPERATIONS` (constant, renamed from `defaultStringifyOperations`) - default `operations` of `structuredStringify` and `structuredStringifyAsync`
- `STRUCTURED_PARSE_DEFAULT_OPERATIONS` (constant, renamed from `defaultParseOperations`) - default `operations` of `structuredParse`
- `StructuredStringifyOptions` (type, renamed from `StringifyOptions`) - options of `structuredStringify` and `structuredStringifyAsync`
- `StructuredStringifyOperations` (type, renamed from `StringifyOperations`) - `operations` option of `structuredStringify` and `structuredStringifyAsync`
- `StructuredParseOptions` (type, renamed from `ParseOptions`) - options of `structuredParse`
- `StructuredParseOperations` (type, renamed from `ParseOperations`) - `operations` option of `structuredParse`
