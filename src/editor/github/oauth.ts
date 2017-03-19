import { autoinject } from 'aurelia-dependency-injection';
import { param, deparam } from '../util';
import { AccessToken, AccessTokenInfo } from './access-token';
import {
  authorizationCodeUri,
  accessTokenUri,
  redirect_uri,
  client_id
} from '../config';

@autoinject
export class OAuth {
  constructor(private accessToken: AccessToken) { }

  private requestAuthorizationCode() {
    const args = {
      client_id,
      redirect_uri,
      scope: 'gist',
      state: Math.floor(Math.random() * 100000).toString()
    };
    const url = `${authorizationCodeUri}?${param(args)}`;
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

  private requestAccessToken = ({ code, state }: AuthorizationCodeResponse) => {
    const args = { code, state };
    const url = `${accessTokenUri}?${param(args)}`;
    return fetch(url)
      .then(response => response.text())
      .then(body => deparam(body) as any as AccessTokenInfo);
  }

  public login() {
    return this.requestAuthorizationCode()
      .then(this.requestAccessToken)
      .then(token => this.accessToken.setToken(token))
      .catch(reason => {
        this.accessToken.setToken(null);
        throw reason;
      });
  }
}

interface AuthorizationCodeResponse {
  code: string;
  state: string;
}

function popup(url: string) {
  let resolve: (value: any) => void = null;
  (window as any).resolveOpenWindow = (query: string) => {
    (window as any).resolveOpenWindow = null;
    resolve(deparam(query));
  };
  const promise = new Promise<AuthorizationCodeResponse>(r => resolve = r);
  window.open(url);
  return promise;
}
