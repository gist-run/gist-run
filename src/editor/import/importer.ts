import { Gist } from '../github/gists';
import { GithubImporter } from './github-importer';
import { JSFiddleImporter } from './jsfiddle-importer';
import { PlunkerImporter } from './plunker-importer';

export class Importer {
  public static inject = [GithubImporter, JSFiddleImporter, PlunkerImporter];

  private importers: GistImporter[];

  constructor(...importers: GistImporter[]) {
    this.importers = importers;
  }

  public import(urlOrId: string) {
    const importer = this.importers.find(x => x.canImport(urlOrId));
    if (importer) {
      return importer.import(urlOrId);
    }
    return Promise.reject('Unrecognized URL or ID');
  }
}

export interface GistImporter {
  canImport(urlOrId: string): boolean;
  import(urlOrId: string): Promise<Gist>;
}
