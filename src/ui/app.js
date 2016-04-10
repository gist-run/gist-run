import {inject} from 'aurelia-framework';
import {EditSessionFactory} from '../editing/edit-session-factory';
import {CurrentFileChangedEvent} from '../editing/current-file-changed-event';
import {QueryString} from '../editing/query-string';
import {defaultGist} from '../github/default-gist';
import {Importer} from '../import/importer';
import {Focus} from './focus';
import alertify from 'alertify';

@inject(EditSessionFactory, Importer, QueryString, Focus)
export class App {
  editSession = null;

  constructor(editSessionFactory, importer, queryString, focus) {
    this.editSessionFactory = editSessionFactory;
    this.importer = importer;
    this.queryString = queryString;
    this.focus = focus;
    addEventListener('beforeunload', ::this.beforeUnload);
  }

  beforeUnload(event) {
    if (this.editSession && this.editSession.dirty) {
      event.returnValue = 'You have unsaved work in this Gist.';
    }
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
    this.editSession.resetWorker().then(::this.editSession.run);
  }

  activate() {
    return this.queryString.read()
      .then(gist => this.setEditSession(this.editSessionFactory.create(gist)));
  }

  newGist() {
    this.queryString.clear();
    this.setEditSession(this.editSessionFactory.create(defaultGist));
  }

  import(urlOrId) {
    this.importer.import(urlOrId)
      .then(gist => {
        this.queryString.write(gist, true);
        return this.editSessionFactory.create(gist);
      })
      .then(::this.setEditSession)
      .then(() => alertify.success('Import successful.'), reason => alertify.error(reason));
  }
}
