import {inject} from 'aurelia-framework';
import {AccessToken} from './access-token';
import {ApiClient} from './api-client'
import {OAuth} from '../github/oauth';

@inject(AccessToken, ApiClient, OAuth)
export class User {
  loggingIn = false;

  constructor(accessToken, api, oauth) {
    this.accessToken = accessToken;
    this.api = api;
    this.oauth = oauth;
    this.setAnonymous();
  }

  setAnonymous() {
    this.authenticated = false;
    this.login = null;
    this.gists_url = null;
    this.avatar_url = null;
  }

  load() {
    if (this.accessToken.value) {
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
        });
    }
    this.setAnonymous();
    return Promise.resolve(null);
  }

  signIn() {
    this.loggingIn = true;
    this.oauth.login()
      .then(() => this.user.load())
      .catch()
      .then(() => this.loggingIn = false);
  }
}
