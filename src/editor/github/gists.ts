import { autoinject } from 'aurelia-framework';
import { ApiClient } from './api-client';
import { SavedGist } from './gist';

@autoinject
export class Gists {
  constructor(private api: ApiClient) { }

  public load(id: string, sha?: string): Promise<SavedGist> {
    let url;
    if (sha) {
      url = `gists/${id}/${sha}`;
    } else {
      url = `gists/${id}`;
    }
    return this.api.fetch(url)
      .then<SavedGist>(response => {
        if (response.ok) {
          // todo: handle truncated files
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject('Gist not found.');
        }
        return Promise.reject('Error loading Gist.');
      });
  }

  public update(id: string, gist: SavedGist) {
    const init = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gist)
    };
    return this.api.fetch(`gists/${id}`, init)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // todo: handle rate limit, etc
        throw new Error('unable to patch gist');
      });
  }

  public create(gist: SavedGist) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gist)
    };
    return this.api.fetch(`gists`, init)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // todo: handle rate limit, etc
        throw new Error('unable to create gist');
      });
  }

  public fork(id: string) {
    return this.api.fetch(`gists/${id}/forks`, { method: 'POST' })
      .then<{ id: string; }>(response => {
        if (response.ok) {
          return response.json();
        }
        // todo: handle rate limit, etc
        throw new Error('unable to fork gist');
      })
      .then(fork => this.load(fork.id));
  }
}
