import {inject} from 'aurelia-framework';
import {GistImporter} from './gist';
import {JSFiddleImporter} from './jsfiddle';
import {PlunkerImporter} from './plunker';

@inject(GistImporter, JSFiddleImporter, PlunkerImporter)
export class Importer {
  constructor(...importers) {
    this.importers = importers;
  }

  import(urlOrId) {
    let importer = this.importers.find(x => x.canImport(urlOrId));
    if (importer) {
      return importer.import(urlOrId);
    }
    return Promise.reject('Unrecognized URL or ID');
  }
}
