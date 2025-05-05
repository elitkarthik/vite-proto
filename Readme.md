## Miscellaneous links

https://www.npmjs.com/package/@protobuf-ts/plugin
https://www.npmjs.com/package/@protobuf-ts/grpcweb-transport
https://github.com/timostamm/protobuf-ts
https://github.com/timostamm/protobuf-ts/blob/main/MANUAL.md
https://github.com/timostamm/protobuf-ts/tree/main/packages

https://github.com/vitejs/vite/discussions/8926
https://github.com/grpc/grpc-web/issues/1242

## Command to generate Proxy/Stubs (Needs both @protobuf-ts/plugin and @protobuf-ts/grpcweb-transport package)
### (Make sure that the path/folder in command line has access to the proto/generated folder structure.)
*C:\dev\ubo\vite-proto> protoc --plugin=protoc-gen-ts=node_modules\\.bin\\protoc-gen-ts.cmd --ts_out ./src/proto/generated -I ./src/proto ./src/proto/*.proto
*