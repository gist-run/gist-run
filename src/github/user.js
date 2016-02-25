import {inject} from 'aurelia-framework';
import {AccessToken} from './access-token';
import {ApiClient} from './api-client'
import {OAuth} from '../github/oauth';

@inject(AccessToken, ApiClient, OAuth)
export class User {
  loading = false;

  constructor(accessToken, api, oauth) {
    this.accessToken = accessToken;
    this.api = api;
    this.oauth = oauth;
    this.load();
  }

  setAnonymous() {
    this.authenticated = false;
    this.login = null;
    this.gists_url = null;
    this.avatar_url = null;
  }

  load() {
    if (this.accessToken.value) {
      this.loading = true;
      return this.api.fetch('user')
        .then(response => {
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

  signIn() {
    this.loading = true;
    this.oauth.login()
      .then(() => this.load())
      .catch()
      .then(() => this.loading = false);
  }
}
