const editorOrigin = location.origin === 'https://gist.host' ? 'https://gist.run' : 'http://localhost:9000';

navigator.serviceWorker.register('worker.js', { scope: './' })
  .then(() => parent.postMessage('worker page ready', editorOrigin));

function relayMessageToWorker(event: MessageEvent) {
  if (event.origin !== editorOrigin) {
    return;
  }
  navigator.serviceWorker.ready
    .then(registration => registration.active.postMessage(event.data, event.ports));
}

addEventListener('message', relayMessageToWorker);
