import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GistAdapter} from './gist-adapter';
import {WorkerClient} from '../worker/worker-client';
import {EditSession} from './edit-session';

@inject(EventAggregator, WorkerClient, GistAdapter)
export class EditSessionFactory {
  constructor(eventAggregator, worker, gistAdapter) {
    this.eventAggregator = eventAggregator;
    this.worker = worker;
    this.gistAdapter = gistAdapter;
  }

  create(gist) {
    let editSesson = new EditSession(gist, this.eventAggregator, this.worker, this.gistAdapter);
    return editSesson.resetWorker()
      .then(() => editSesson);
  }
}
