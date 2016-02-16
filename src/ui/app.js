import {inject} from 'aurelia-framework';

import {EventAggregator} from 'aurelia-event-aggregator';
import {EditSessionFactory} from '../editing/edit-session-factory';
import {CurrentFileChangedEvent} from '../editing/current-file-changed-event';

import {Gists} from '../github/gists';
import {User} from '../github/user';
import {defaultGist} from '../github/default-gist';

import {Focus} from './focus';

@inject(EditSessionFactory, Gists, User, EventAggregator, Focus)
export class App {
  user = null;
  editSession = null;

  constructor(editSessionFactory, gists, user, eventAggregator, focus) {
    this.editSessionFactory = editSessionFactory;
    this.gists = gists;
    this.user = user;
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
    return Promise.all([
      this.gists.fromQuery(location.search)
        .catch(reason => null)
        .then(gist => {
          if (!gist) {
            return this.newGist();
          }
          return this.editSessionFactory.create(gist)
            .then(editSesson => this.setEditSession(editSesson));
        }),
      this.user.load().catch()
    ]);
  }

  attached() {
    setTimeout(() => {
      this.editSession.run();
      this.focus.set('editor');
    });
  }

  newGist() {
    history.replaceState(null, document.title, '/');
    return this.editSessionFactory.create(defaultGist)
      .then(editSesson => this.setEditSession(editSesson));
  }

  loadGist(urlOrId) {
    let match = /(?:^|\/)([\da-f]{20})(?:\/([\da-f]{40})){0,1}$/.exec(urlOrId);
    if (match === null) {
      return;
    }
    let id = match[1];
    let sha = match[2];
    let query;
    if (sha) {
      query = `?id=${id}&sha=${sha}`;
    } else {
      query = `?id=${id}`;
    }

    this.gists.fromQuery(query)
      .then(gist => {
        if (!gist) {
          return;
        }
        history.pushState(null, window.title, '?' + this.gists.toQuery(gist, !!sha));
        return this.editSessionFactory.create(gist)
          .then(editSesson => this.setEditSession(editSesson));
      })
      .catch();
  }
}
