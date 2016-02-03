const isDev = false; /localhost/.test(location.origin);
export const workerOrigin = isDev ? 'http://localhost:3000' : 'https://gist.host';
export const workerPage = workerOrigin + '/';

export const authorizationCodeUri = 'https://github.com/login/oauth/authorize';
export const accessTokenUri = 'https://gist-run-auth.herokuapp.com/access-token';
export const redirect_uri = 'https://gist.run/redirect-target.html';
export const client_id = '13b6e534ab9bc9953506';
