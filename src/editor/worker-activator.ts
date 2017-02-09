import { workerOrigin, workerPage } from './constants';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', workerPage);
iframe.setAttribute('style', 'display: none');

export function activate() {
  document.body.appendChild(iframe);
}

let resolveWorkerPage: () => void;
const workerPageReady = new Promise(resolve => resolveWorkerPage = resolve);

function handleMessage(event: MessageEvent) {
  if (event.origin !== workerOrigin || event.data !== 'worker page ready') {
    return;
  }
  removeEventListener('message', handleMessage);
  resolveWorkerPage();
}
addEventListener('message', handleMessage);

export function postMessageToWorker(message: any, responsePort: MessagePort) {
  workerPageReady.then(() => iframe.contentWindow.postMessage(message, workerOrigin, [responsePort]));
}
