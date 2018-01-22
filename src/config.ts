export const workerOrigin = location.origin === 'https://gist.run' ? 'https://gist.host' : 'http://localhost:5000';
export const workerPage = `${workerOrigin}/worker-loader.html`;
