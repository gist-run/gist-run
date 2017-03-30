declare const caches: CacheStorage;

(self as any).importScripts('node_modules/tslib/tslib.js');

(self as ServiceWorkerGlobalScope).addEventListener('install', event => {
  // The skipWaiting() method allows this service worker to progress from the registration's
  // waiting position to active even while service worker clients are using the registration.
  // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-global-scope-skipwaiting
  event.waitUntil(self.skipWaiting());
});

(self as ServiceWorkerGlobalScope).addEventListener('activate', event => {
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

function createUrl(clientID: number, name: string) {
  return new URL(`/run/${clientID}/${name}`, location.href).toString();
}

function createRequest(clientID: number, name: string) {
  const url = createUrl(clientID, name);
  return new Request(url, { mode: 'no-cors' });
}

let messageQueue = Promise.resolve();

async function handleMessageEvent(event: MessageEvent) {
  if (!event.data.clientID || event.ports.length !== 1) {
    return;
  }

  const responsePort: MessagePort = event.ports[0];

  await messageQueue.catch(error => console.error(error));
  messageQueue = processFilesMessage(event.data as FilesMessage, responsePort);
}

async function processFilesMessage(
  { clientID, reset, files }: FilesMessage,
  responsePort: MessagePort
) {
  if (reset) {
    await caches.delete(clientID.toString());
  }
  const cache = await caches.open(clientID.toString());
  const promises: Promise<any>[] = [];
  for (const [name, content] of Object.entries(files)) {
    const request = createRequest(clientID, name);
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

(self as ServiceWorkerGlobalScope).addEventListener('message', handleMessageEvent);

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

(self as ServiceWorkerGlobalScope).addEventListener('fetch', handleFetch);

const contentTypeMap: { [extension: string]: string } = {
  css: 'text/css',
  js: 'application/javascript',
  json: 'application/json',
  html: 'text/html',
  svg: 'image/svg+xml'
};

function getExtension(name: string) {
  const parts = name.split('.');
  if (parts.length === 1) {
    return '';
  }
  return parts[parts.length - 1];
}

function getContentType(name: string) {
  const extension = getExtension(name);
  if (extension === '') {
    return 'text/plain';
  }
  return contentTypeMap[extension] || 'text/plain';
}
