import { autoinject } from 'aurelia-dependency-injection';
import { AccessToken } from './access-token';
import { RateLimit } from './rate-limit';

const base = 'https://api.github.com';

@autoinject
export class ApiClient {
  constructor(
    private accessToken: AccessToken,
    private rateLimit: RateLimit) {
  }

  public fetch(path: string, init?: RequestInit) {
    const url = `${base}/${path}`;
    init = init || {};
    init.headers = init.headers || {};
    if (this.accessToken.value) {
      (init.headers as any).Authorization = `token ${this.accessToken.value}`;
    }
    return fetch(url, init)
      .then(response => {
        this.rateLimit.readHeaders(response);
        return response;
      });
  }
}
