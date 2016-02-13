import {inject} from 'aurelia-framework';
import {RateLimit} from '../github/rate-limit';
import {User} from '../github/user';

@inject(RateLimit, User)
export class RateAlert {
  constructor(rateLimit, user) {
    this.rateLimit = rateLimit;
    this.user = user;
  }
}
