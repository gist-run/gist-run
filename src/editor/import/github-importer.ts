import { autoinject } from 'aurelia-framework';
import { Gists } from '../github/gists';
import { GistImporter } from './importer';

const gistUrlRegex = /^https:\/\/gist\.github\.com(?:\/[^\/]+)?\/([\da-f]+)(?:\/([\da-f]{40}))?$/;
const gistIdRegex = /^[\da-f]+$/;
const gistRunRegex = /^https:\/\/gist\.run\/?\?id=(?:\/[^\/]+)?([\da-f]+)(?:&sha=([\da-f]{40}))?$/;

@autoinject
export class GitHubImporter implements GistImporter {
  constructor(private gists: Gists) { }

  public canImport(urlOrId: string) {
    return gistUrlRegex.test(urlOrId) || gistIdRegex.test(urlOrId) || gistRunRegex.test(urlOrId);
  }

  public import(urlOrId: string) {
    if (gistUrlRegex.test(urlOrId)) {
      const match = gistUrlRegex.exec(urlOrId);
      const id = match[1];
      const sha = match[2];
      return this.gists.load(id, sha);
    }

    if (gistIdRegex.test(urlOrId)) {
      return this.gists.load(urlOrId);
    }

    const match = gistRunRegex.exec(urlOrId);
    const id = match[1];
    const sha = match[2];
    return this.gists.load(id, sha);
  }
}
