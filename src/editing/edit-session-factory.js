import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {GistAdapter} from './gist-adapter';
import {WorkerClient} from '../worker/worker-client';
import {EditSession} from './edit-session';
import {QueryString} from './query-string';

@inject(EventAggregator, WorkerClient, GistAdapter, QueryString)
export class EditSessionFactory {
  constructor(eventAggregator, worker, gistAdapter, queryString) {
    this.eventAggregator = eventAggregator;
    this.worker = worker;
    this.gistAdapter = gistAdapter;
    this.queryString = queryString;
  }

  create(gist) {
    let editSesson = new EditSession(
      gist,
      this.eventAggregator,
      this.worker,
      this.gistAdapter,
      this.queryString);
    return editSesson.resetWorker().then(() => editSesson);
  }
}
