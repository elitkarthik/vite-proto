import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import { HealthClient } from './proto/generated/health.client.ts';
import { HealthCheckRequest } from './proto/generated/health.ts';
import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
// import { GrpcTransport } from '@protobuf-ts/grpc-transport';

// import * as grpc from '@grpc/grpc-js';
import { OfflineMessagingClient } from './proto/generated/offlinemessaging.client';
import { GetWorkstationNameRequest } from './proto/generated/offlinemessaging';

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

var OfflineMessagingClientclient = new OfflineMessagingClient(transport);
const getWorkstationNameRequest = {} as GetWorkstationNameRequest;
getWorkstationNameRequest.workstationID = "";

OfflineMessagingClientclient.getWorkstationName(getWorkstationNameRequest).then(rpcResponse => {
   console.log("Workstation Name:", rpcResponse.response.workstationID); // Accessing the 'response' property of FinishedUnaryCall
  }).catch(error => {
  console.error("Error calling GetWorkstationName:", error);
  });

  const asyncCallTest = OfflineMessagingClientclient.getWorkstationName(getWorkstationNameRequest);
  console.log("Headers: ", await asyncCallTest.headers);
  console.log("Status: ", await asyncCallTest.status);
  console.log("Server Response: ",await asyncCallTest.response);
  console.log("Server Request: ", await asyncCallTest.request);
  console.log("Server requestHeaders: ", await asyncCallTest.requestHeaders);
  console.log("Server trailers: ", await asyncCallTest.trailers);