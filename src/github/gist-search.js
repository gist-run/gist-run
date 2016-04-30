import {inject} from 'aurelia-framework';
import {ApiClient} from './api-client';
import {User} from './user';

@inject(ApiClient, User)
export class GistSearch {
  constructor(api, user) {
    this.api = api;
    this.user = user;
  }

  first(predicate) {
    this.api.fetch(`users/${user.login}/`)
  }
}
