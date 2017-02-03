declare const caches: CacheStorage;

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

interface GistFile {
  name: string;
  type: string;
  content: string;
}

function createResponse(file: GistFile) {
  let responseInit = {
    status: 200,
    statusText: 'OK',
    headers: {
      'Content-Type': file.type
    }
  };
  return new Response(file.content, responseInit);
}

function createUrl(clientID: number, name: string) {
  return new URL(`/run/${clientID}/${name}`, location.href).toString();
}

function createRequest(clientID: number, file: GistFile) {
  let url = createUrl(clientID, file.name);
  return new Request(url, { mode: 'no-cors' });
}

function putFile(cache: Cache, clientID: number, file: GistFile) {
  let response = createResponse(file);
  let request = createRequest(clientID, file);
  return cache.put(request, response);
}

function updateFile(clientID: number, file: GistFile) {
  return caches.open(clientID.toString())
    .then(cache => putFile(cache, clientID, file));
}

function deleteFile(clientID: number, file: GistFile) {
  let request = createRequest(clientID, file);
  return caches.open(clientID.toString())
    .then(cache => cache.delete(request));
}

function resetFiles(clientID: number, files: GistFile[]) {
  return caches.delete(clientID.toString())
    .then(() => caches.open(clientID.toString()))
    .then(cache => Promise.all(files.map(file => putFile(cache, clientID, file))));
}

function handleMessage(event: MessageEvent) {
  if (!event.data.action || event.ports.length !== 1) {
    return;
  }
  const data = event.data;
  const responsePort: MessagePort = event.ports[0];
  const clientID: number = data.clientID;
  const action: string = data.action;
  let handler: Promise<any>;
  switch (action) {
    case 'updateFile':
      handler = updateFile(clientID, data.file);
      break;
    case 'deleteFile':
      handler = deleteFile(clientID, data.file);
      break;
    case 'resetFiles':
      handler = resetFiles(clientID, data.files);
      break;
    default:
      throw new Error(`Unknown action: ${action}`);
  }
  handler.then(() => responsePort.postMessage('ok'));
}

(self as ServiceWorkerGlobalScope).addEventListener('message', handleMessage);

function handleFetch(event: FetchEvent) {
  const request = event.request;
  if (!/\/run\//.test(request.url)) {
    return;
  }
  const options = {}; // chrome does not support these yet: { ignoreSearch: true, ignoreMethod: true, ignoreVary: true };
  event.respondWith(caches.match(request, options)
    .then(response => response ? response : fetch(request)));
}

(self as ServiceWorkerGlobalScope).addEventListener('fetch', handleFetch);
