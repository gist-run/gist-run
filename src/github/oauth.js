import {inject} from 'aurelia-framework';
import {param, deparam} from '../util';
import {AccessToken} from './access-token';
import {
  authorizationCodeUri,
  accessTokenUri,
  redirect_uri,
  client_id
} from '../config';

function popup(url) {
  let resolve = null;
  window.resolveOpenWindow = query => {
    window.resolveOpenWindow = null;
    resolve(deparam(query));
  };
  let promise = new Promise(r => resolve = r);
  window.open(url);
  return promise;
}

@inject(AccessToken)
export class OAuth {
  constructor(accessToken) {
    this.accessToken = accessToken;
  }

  requestAuthorizationCode() {
    let args = {
      client_id,
      redirect_uri,
      scope: 'gist',
      state: Math.floor(Math.random() * 100000).toString()
    };
    let url = `${authorizationCodeUri}?${param(args)}`;
    return popup(url)
      .then(result => {
        if (!(result.code && result.state)) {
          throw new Error('Redirect did not include code and state parameters.');
        }
        if (result.state !== args.state) {
          throw new Error('State mismatch.');
        }
        return result;
      });
  }

  requestAccessToken({ code, state }) {
    let args = { code, state };
    let url = `${accessTokenUri}?${param(args)}`;
    return fetch(url)
      .then(response => response.text())
      .then(body => deparam(body));
  }

  login() {
    return this.requestAuthorizationCode()
      .then(::this.requestAccessToken)
      .then(token => this.accessToken.setToken(token))
      .catch(reason => {
        this.accessToken.setToken(null);
        throw reason;
      });
  }
}
