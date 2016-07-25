import {inject} from 'aurelia-framework';
import {GistSearch} from './github/gist-search';
import {Gists} from './github/gists';

const defaultTemplates = [
  {
    url: '',
    etag: '',
    gist: {}
  }
];

@inject(GistSearch, Gists)
export class Settings {
  templates = defaultTemplates;

  constructor(search, gists) {
    this.search = search;
    this.gists = gists;
  }

  load() {
    this.search.find(gist => gist.description === 'GistRun Settings', 1)
      .then(gists => {
        if (!gists.length) {
          return;
        }
        return this.gists.load(id);
      })
      .then(gist => {
        const settingsFile = gist.files['settings.json'];
        if (!settingsFile) {
          return;
        }
        const settings = JSON.parse(settingsFile.content);
        this.templates = settings.templates;
      });
  }

  save() {

  }
}
