import { autoinject } from 'aurelia-framework';
import { param, deparam } from './util';
import { Gists } from './github/gists';
import { Gist, SavedGist } from './github/gist';
import { defaultGist } from './github/default-gist';

@autoinject
export class QueryString {
  constructor(
    private readonly gists: Gists,
    private readonly document: Document,
    private readonly location: Location,
    private readonly history: History) {
  }

  public clear() {
    this.history.replaceState(null, this.document.title, '/');
  }

  public read() {
    const query = this.location.search;
    if (query.length) {
      const args = deparam(query.substring(1));
      if (args.id) {
        return this.gists.load(args.id, args.sha).catch(() => {
          this.clear();
          return defaultGist;
        });
      } else {
        this.clear();
      }
    }
    return Promise.resolve(defaultGist);
  }

  public write(gist: Gist, withSha: boolean) {
    if (gist.id === undefined) {
      this.clear();
      return;
    }
    const saved = gist as SavedGist;
    let query;
    if (withSha) {
      query = param({ id: gist.id, sha: saved.history[0].version });
    } else {
      query = param({ id: gist.id });
    }
    this.history.pushState(null, this.document.title, '?' + query);
  }
}
