import {inject} from 'aurelia-framework';
import {EditSessionFactory} from '../editing/edit-session-factory';
import {CurrentFileChangedEvent} from '../editing/current-file-changed-event';
import {QueryString} from '../editing/query-string';
import {defaultGist} from '../github/default-gist';
import {Importer} from '../import/importer';
import {Focus} from './focus';

@inject(EditSessionFactory, Importer, QueryString, Focus)
export class App {
  editSession = null;

  constructor(editSessionFactory, importer, queryString, focus) {
    this.editSessionFactory = editSessionFactory;
    this.importer = importer;
    this.queryString = queryString;
    this.focus = focus;
  }

  currentFileChanged(event) {
    if (event.file.name === '') {
      this.focus.set('filename');
    } else {
      this.focus.set('editor');
    }
  }

  setEditSession(editSession) {
    if (this.fileChangedSub) {
      this.fileChangedSub.dispose();
    }
    this.editSession = editSession;
    this.fileChangedSub = editSession.subscribe(CurrentFileChangedEvent, ::this.currentFileChanged);
  }

  activate() {
    return this.queryString.read()
      .then(gist => this.editSessionFactory.create(gist))
      .then(editSesson => this.setEditSession(editSesson));
  }

  attached() {
    setTimeout(() => {
      this.editSession.run();
      this.focus.set('editor');
    });
  }

  newGist() {
    this.queryString.clear();
    return this.editSessionFactory.create(defaultGist)
      .then(editSesson => this.setEditSession(editSesson));
  }

  import(urlOrId) {
    this.importer.import(urlOrId)
      .then(gist => {
        this.queryString.write(gist, true);
        return this.editSessionFactory.create(gist);
      })
      .then(editSesson => this.setEditSession(editSesson));
  }
}
