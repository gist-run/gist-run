import {inject} from 'aurelia-framework';
import {ApiClient} from './api-client';
import {param, deparam} from '../util';

@inject(ApiClient)
export class Gists {
  constructor(api) {
    this.api = api;
  }

  load(id, sha) {
    let url;
    if (sha) {
      url = `gists/${id}/${sha}`;
    } else {
      url = `gists/${id}`;
    }
    return this.api.fetch(url)
      .then(response => {
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

  update(id, gist) {
    let init = {
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

  create(gist) {
    let init = {
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

  fork(id) {
    return this.api.fetch(`gists/${id}/forks`, { method: 'POST' })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        // todo: handle rate limit, etc
        throw new Error('unable to fork gist');
      })
      .then(fork => this.load(fork.id));
  }
}
