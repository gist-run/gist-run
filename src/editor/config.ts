const isDev = location.origin === 'http://localhost:9000';
export const workerOrigin = isDev ? 'http://localhost:3000' : 'https://gist.host';
export const workerPage = workerOrigin + '/';

export const authorizationCodeUri = 'https://github.com/login/oauth/authorize';
export const accessTokenUri = 'https://gist-run-auth.herokuapp.com/access-token';
// tslint:disable-next-line:variable-name
export const redirect_uri = 'https://gist.run/authorized.html';
// tslint:disable-next-line:variable-name
export const client_id = '13b6e534ab9bc9953506';
