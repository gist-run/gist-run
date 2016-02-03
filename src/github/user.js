import {inject} from 'aurelia-framework';
import {AccessToken} from './access-token';
import {ApiClient} from './api-client';

@inject(AccessToken, ApiClient)
export class User {
  constructor(accessToken, api) {
    this.accessToken = accessToken;
    this.api = api;
    this.setAnonymous();
  }

  setAnonymous() {
    this.authenticated = false;
    this.login = null;
    this.gists_url = null;
    this.avatar_url = null;
  }

  load() {
    return this.api.fetch('user')
      .then(response => {
        if (response.status === 200) {
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

  update() {
    if (this.accessToken.token === null) {
      this.setAnonymous();
      return new Promise(resolve => resolve());
    }
    return this.load()
      .catch(reason => this.setAnonymous());
  }
}
