import { autoinject } from 'aurelia-framework';
import { AccessToken } from './access-token';
import { ApiClient } from './api-client';
import { OAuth } from '../github/oauth';

@autoinject
export class User {
  public loading = false;
  public authenticated = false;
  public login: string | null = null;
  // tslint:disable:variable-name
  public gists_url: string | null;
  public avatar_url: string | null;
  // tslint:enable:variable-name

  constructor(
    private accessToken: AccessToken,
    private api: ApiClient,
    private oauth: OAuth) {
    this.load();
  }

  public setAnonymous() {
    this.authenticated = false;
    this.login = null;
    this.gists_url = null;
    this.avatar_url = null;
  }

  public load() {
    if (this.accessToken.value) {
      this.loading = true;
      return this.api.fetch('user')
        .then<null | { login: string; gists_url: string; avatar_url: string }>(response => {
          if (response.ok) {
            return response.json();
          }
          return null;
        })
        .then(user => {
          if (user) {
            this.authenticated = true;
            this.login = user.login;
            this.gists_url = user.gists_url;
            this.avatar_url = user.avatar_url;
          } else {
            this.setAnonymous();
          }
        })
        .catch()
        .then(() => this.loading = false);
    }
    this.setAnonymous();
    return Promise.resolve(null);
  }

  public signIn() {
    this.loading = true;
    this.oauth.login()
      .then(() => this.load())
      .catch()
      .then(() => this.loading = false);
  }
}
