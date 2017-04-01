import { autoinject } from 'aurelia-framework';
import { Gists } from '../github/gists';
import { GistImporter } from './importer';

const gistUrlRegex = /^https:\/\/gist\.github\.com(?:\/[^\/]+)?\/([\da-f]+)(?:\/([\da-f]{40}))?$/;

@autoinject
export class GitHubImporter implements GistImporter {
  constructor(private gists: Gists) { }

  public canImport(urlOrId: string) {
    return gistUrlRegex.test(urlOrId);
  }

  public import(urlOrId: string) {
    const match = gistUrlRegex.exec(urlOrId);
    const id = match[1];
    const sha = match[2];

    return this.gists.load(id, sha);
  }
}
