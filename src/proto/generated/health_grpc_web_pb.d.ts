import * as grpcWeb from 'grpc-web';

import * as health_pb from './health_pb'; // proto import: "health.proto"


export class HealthClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: health_pb.HealthCheckRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: health_pb.HealthCheckResponse) => void
  ): grpcWeb.ClientReadableStream<health_pb.HealthCheckResponse>;

  watch(
    request: health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<health_pb.HealthCheckResponse>;

}

export class HealthPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  check(
    request: health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<health_pb.HealthCheckResponse>;

  watch(
    request: health_pb.HealthCheckRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<health_pb.HealthCheckResponse>;

}

