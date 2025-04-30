import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { HealthClient } from './proto/generated/health.client.ts';
import { HealthCheckRequest } from './proto/generated/health.ts';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { GrpcTransport } from '@protobuf-ts/grpc-transport';

// import * as grpc from '@grpc/grpc-js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

var request: HealthCheckRequest = { service: ""};

let transport = new GrpcWebFetchTransport({
  baseUrl: "https://localhost:7084"
});

var client = new HealthClient(transport);

client.check(request).then(rpcResponse => {
   console.log(rpcResponse.response.status); // Accessing the 'response' property of FinishedUnaryCall
  }).catch(error => {
  console.error("Error calling HealthCheck:", error);
});


