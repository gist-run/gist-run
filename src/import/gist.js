import {inject} from 'aurelia-framework';
import {Gists} from '../github/gists';

const gistUrlRegex = /^https:\/\/gist\.github\.com(?:\/[^\/]+)?\/([\da-f]+)(?:\/([\da-f]{40}))?$/;

@inject(Gists)
export class GistImporter {
  constructor(gists) {
    this.gists = gists;
  }

  canImport(urlOrId) {
    return gistUrlRegex.test(urlOrId);
  }

  import(urlOrId) {
    let match = gistUrlRegex.exec(urlOrId);
    let id = match[1];
    let sha = match[2];

    return this.gists.load(id, sha);
  }
}
