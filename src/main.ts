import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

import { HealthClient } from './proto/generated/health_grpc_web_pb';
import { HealthCheckRequest } from './proto/generated/health_pb';

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

//write code to call client check method
const client = new HealthClient('http://localhost:8080');
const request =  new HealthCheckRequest();

// const request = new google.protobuf.Empty();
client.check(request, {}, (err, response) => {
  if (err) {
    console.error('Error calling check method:', err);
    return;
  }
  console.log('Health check response:', response.toObject());
}
);

