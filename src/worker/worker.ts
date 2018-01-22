import { getContentType } from '../file-utility';

(((self: ServiceWorkerGlobalScope) => {
  self.addEventListener('install', event => {
    // The skipWaiting() method allows this service worker to progress from the registration's
    // waiting position to active even while service worker clients are using the registration.
    // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-global-scope-skipwaiting
    event.waitUntil(self.skipWaiting());
  });

  self.addEventListener('activate', event => {
    // The claim() method of the of the Clients interface allows an active Service Worker to set
    // itself as the active worker for a client page when the worker and the page are in the same
    // scope. This triggers an oncontrollerchange event on any client pages within the Service
    // Worker's scope.
    // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#clients-claim-method
    event.waitUntil(self.clients.claim());
  });

  function createResponse(name: string, content: string) {
    const responseInit = {
      status: 200,
      statusText: 'OK',
      headers: {
        'Content-Type': getContentType(name)
      }
    };
    return new Response(content, responseInit);
  }

  function createUrl(session: number, name: string) {
    return new URL(`/run/${session}/${name}`, location.href).toString();
  }

  function createRequest(session: number, name: string) {
    const url = createUrl(session, name);
    return new Request(url, { mode: 'no-cors' });
  }

  let previousMessage = Promise.resolve();

  async function handleMessageEvent(event: ExtendableMessageEvent) {
    if (!event.data.session || event.ports === null || event.ports.length !== 1) {
      return;
    }

    const responsePort: MessagePort = event.ports[0];

    await previousMessage.catch(error => console.error(error));
    previousMessage = processFilesMessage(event.data as WorkerMessage, responsePort);
  }

  async function processFilesMessage(
    { session, type, files }: WorkerMessage,
    responsePort: MessagePort
  ) {
    if (type !== 'files') {
      return;
    }
    const cache = await caches.open('files');
    const promises: Promise<any>[] = [];
    for (const [name, content] of Object.entries(files)) {
      const request = createRequest(session, name);
      if (content === null) {
        promises.push(cache.delete(request));
        continue;
      }
      const response = createResponse(name, content);
      promises.push(cache.put(request, response));
    }
    await Promise.all(promises);
    responsePort.postMessage('ok');
  }

  self.addEventListener('message', handleMessageEvent);

  function handleFetch(event: FetchEvent) {
    const request = event.request;
    if (!/\/run\//.test(request.url)) {
      return;
    }

    // chrome does not support these yet: { ignoreSearch: true, ignoreMethod: true, ignoreVary: true };
    const options = {};
    event.respondWith(caches.match(request, options)
      .then(response => response ? response : fetch(request)));
  }

  self.addEventListener('fetch', handleFetch);

})(self as any));
