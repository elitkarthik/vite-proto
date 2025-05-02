https://www.npmjs.com/package/@protobuf-ts/plugin
https://www.npmjs.com/package/@protobuf-ts/grpcweb-transport
https://github.com/timostamm/protobuf-ts


https://github.com/vitejs/vite/discussions/8926
https://github.com/grpc/grpc-web/issues/1242

--ONLY TYPESCRIPT (Needs both @protobuf-ts/plugin and @protobuf-ts/grpcweb-transport package)
C:\dev\ubo\vite-proto> protoc --plugin=protoc-gen-ts=node_modules\\.bin\\protoc-gen-ts.cmd --ts_out ./src/proto/generated -I ./src/proto ./src/proto/*.proto

--GRPC
C:\dev\ubo\vite-proto\src\proto>
protoc --proto_path= --js_out=import_style=commonjs,binary:./generated --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:./generated health.proto

//https://www.npmjs.com/package/vite-plugin-require

