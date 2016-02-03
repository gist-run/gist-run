import {inject} from 'aurelia-framework';
import {AccessToken} from './access-token';
import {RateLimit} from './rate-limit';

const base = 'https://api.github.com';

@inject(AccessToken, RateLimit)
export class ApiClient {
  constructor(accessToken, rateLimit) {
    this.accessToken = accessToken;
    this.rateLimit = rateLimit;
  }

  fetch(path, init) {
    let url = `${base}/${path}`;
    init = init || {};
    init.headers = init.headers || {};
    if (this.accessToken.value) {
      init.headers.Authorization = `token ${this.accessToken.value}`;
    }
    return fetch(url, init)
      .then(response => {
        this.rateLimit.readHeaders(response);
        return response;
      });
  }
}
