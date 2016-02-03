import {inject} from 'aurelia-framework';

import {EventAggregator} from 'aurelia-event-aggregator';
import {EditSessionFactory} from '../editing/edit-session-factory';
import {CurrentFileChangedEvent} from '../editing/current-file-changed-event';

import {OAuth} from '../github/oauth';
import {Gists} from '../github/gists';
import {User} from '../github/user';
import {RateLimit} from '../github/rate-limit';
import {defaultGist} from '../github/default-gist';

import {Focus} from './focus';

@inject(EditSessionFactory, Gists, User, OAuth, RateLimit, EventAggregator, Focus)
export class App {
  user = null;
  editSession = null;

  constructor(editSessionFactory, gists, user, oauth, rateLimit, eventAggregator, focus) {
    this.editSessionFactory = editSessionFactory;
    this.gists = gists;
    this.user = user;
    this.oauth = oauth;
    this.rateLimit = rateLimit;
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
      this.gists.fromQuery(window.location.search)
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

  login() {
    this.oauth.login().then(() => this.user.load());
  }

  newGist() {
    history.replaceState(null, document.title, '/');
    return this.editSessionFactory.create(defaultGist)
      .then(editSesson => this.setEditSession(editSesson));
  }

  loadGist(urlOrId) {
    alert('not implemented');
  }
}
