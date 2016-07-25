import {inject} from 'aurelia-framework';
import {ApiClient} from './api-client';
import {User} from './user';
import {parseLinkHeader} from '../util';

@inject(ApiClient, User)
export class GistSearch {
  constructor(api, user) {
    this.api = api;
    this.user = user;
    this.pages = [null];
  }

  fetchPage(index) {
    if (!this.user.authenticated) {
      throw new Error('User is not authenticated.');
    }

    const init = { headers: {} };
    let page = this.pages[index];
    if (page) {
      // page fresh?
      if (Date.now() - page.timestamp < 10000) {
        return Promise.resolve(page);
      }

      init.headers['If-None-Match'] = page.etag;
    }
    return this.api.fetch(`users/${this.user.login}/gists?page=${index}`, init)
      .then(response => {
        if (!response.ok) {
          return Promise.reject('Unable to load page');
        }

        if (response.status === 304) {
          return page;
        }

        return response.json().then(gists => {
          const etag = response.headers.get('ETag');
          const next = !!parseLinkHeader(response.headers.get('Link')).next;
          const timestamp = Date.now();
          page = { etag, gists, next, timestamp };
          this.pages[index] = page;
          return page;
        });
      });
  }

  incremental(predicate, count) {
    const matches = [];

    const searchInternal = index => {
      return this.fetchPage(index)
        .then(page => {
          matches.push(...page.gists.filter(predicate));
          if (matches.length < count && page.next) {
            return searchInternal(index + 1);
          }
          return matches;
        });
    }

    const done = searchInternal(1);

    return { matches, done };
  }

  find(predicate, count) {
    return this.incremental(predicate, count).done;
  }
}
