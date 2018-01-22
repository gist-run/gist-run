import { workerOrigin, workerPage } from './config';

const iframe = document.createElement('iframe');
iframe.setAttribute('src', workerPage);
iframe.setAttribute('style', 'display: none');

export function activateWorker() {
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

export function sendWorkerMessage(message: WorkerMessage) {
  return new Promise<void>((resolve, reject) => {
    const channel = new MessageChannel();
    channel.port1.onmessage = event => {
      if (event.data.error) {
        reject(event.data.error);
        return;
      }
      resolve(event.data);
    };
    workerPageReady.then(() => iframe.contentWindow.postMessage(message, workerOrigin, [channel.port2]));
  });
}
