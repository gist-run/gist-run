import {inject, bindable} from 'aurelia-framework';
import {User} from '../github/user';

@inject(User)
export class Header {
  @bindable import;
  @bindable new;

  constructor(user) {
    this.user = user;
  }
}
