const storageKey = 'github-oauth-token';

export class AccessToken {
  private token: AccessTokenInfo | null;

  constructor() {
    const json = localStorage.getItem(storageKey);
    if (json) {
      this.token = JSON.parse(json);
    }
  }

  public get value(): string | null {
    return this.token ? this.token.access_token : null;
  }

  public get scope(): string | null {
    return this.token ? this.token.scope : null;
  }

  public setToken(token: AccessTokenInfo) {
    this.token = token;
    if (token) {
      localStorage.setItem(storageKey, JSON.stringify(token));
    } else {
      localStorage.removeItem(storageKey);
    }
  }
}

export interface AccessTokenInfo {
  access_token: string;
  scope: string;
}
