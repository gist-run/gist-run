import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {EditSessionFactory} from '../editing/edit-session-factory';
import {CurrentFileChangedEvent} from '../editing/current-file-changed-event';
import {QueryString} from '../editing/query-string';
import {defaultGist} from '../github/default-gist';
import {Importer} from '../import/importer';
import {Focus} from './focus';

@inject(EditSessionFactory, Importer, QueryString, EventAggregator, Focus)
export class App {
  editSession = null;

  constructor(editSessionFactory, importer, queryString, eventAggregator, focus) {
    this.editSessionFactory = editSessionFactory;
    this.importer = importer;
    this.queryString = queryString;
    this.eventAggregator = eventAggregator;
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
    if (this.currentFileChangedSubscription) {
      this.currentFileChangedSubscription.dispose();
    }
    this.editSession = editSession;
    this.currentFileChangedSubscription = this.eventAggregator
      .subscribe(CurrentFileChangedEvent, ::this.currentFileChanged);
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
