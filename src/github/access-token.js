const storageKey = 'github-oauth-token';

export class AccessToken {
  _token = null;

  constructor() {
    let json = localStorage.getItem(storageKey);
    if (json) {
      this._token = JSON.parse(json);
    }
  }

  get value() {
    return this._token ? this._token.access_token : null;
  }

  get scope() {
    return this._token ? this._token.scope : null;
  }

  setToken(token) {
    this._token = token;
    if (token) {
      localStorage.setItem(storageKey, JSON.stringify(token));
    } else {
      localStorage.removeItem(storageKey)
    }
  }
}
