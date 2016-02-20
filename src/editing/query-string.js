import {inject} from 'aurelia-framework';
import {param, deparam} from '../util';
import {Gists} from '../github/gists';
import {defaultGist} from '../github/default-gist';

@inject(Gists)
export class QueryString {
  constructor(gists) {
    this.gists = gists;
  }

  clear() {
    history.replaceState(null, document.title, '/');
  }

  read() {
    let query = location.search;
    if (query.length) {
      let args = deparam(query.substring(1));
      if (args.id) {
        return this.gists.load(args.id, args.sha).catch(reason => {
          this.clear();
          return defaultGist;
        });
      } else {
        this.clear();
      }
    }
    return Promise.resolve(defaultGist);
  }

  write(gist, withSha) {
    if (!gist.id || !gist.history) {
      this.clear();
      return;
    }
    let query;
    if (withSha) {
      query = param({ id: gist.id, sha: gist.history[0].version });
    } else {
      query = param({ id: gist.id });
    }
    history.pushState(null, window.title, '?' + query);
  }
}
