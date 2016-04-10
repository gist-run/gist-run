import {workerOrigin, workerPage} from '../config';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', workerPage);
iframe.setAttribute('style', 'display: none');

export function activate() {
  document.body.appendChild(iframe);
}

let resolveWorkerPage = null;
const workerPageReady = new Promise(resolve => resolveWorkerPage = resolve);

function handleMessage(event) {
  if (event.origin !== workerOrigin || event.data !== 'worker page ready') {
    return;
  }
  removeEventListener('message', handleMessage);
  resolveWorkerPage();
}
addEventListener('message', handleMessage);

export function postMessageToWorker(message, responsePort) {
  workerPageReady.then(() => iframe.contentWindow.postMessage(message, workerOrigin, [responsePort]));
}
