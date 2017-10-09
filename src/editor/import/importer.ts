import { Gist } from '../github/gist';
import { CodePenImporter } from './codepen-importer';
import { GitHubImporter } from './github-importer';
import { JSFiddleImporter } from './jsfiddle-importer';
import { PlunkerImporter } from './plunker-importer';

export class Importer {
  public static inject = [CodePenImporter, GitHubImporter, JSFiddleImporter, PlunkerImporter];

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

export interface GistPrototype {
  description: string;
  files: FilesMap;
}
