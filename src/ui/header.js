import {inject, bindable} from 'aurelia-framework';
import {User} from '../github/user';

@inject(User)
export class Header {
  @bindable loadGist;
  @bindable newGist;

  constructor(user) {
    this.user = user;
  }
}
