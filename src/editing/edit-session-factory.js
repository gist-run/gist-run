import {inject} from 'aurelia-framework';
import {GistAdapter} from './gist-adapter';
import {WorkerClient} from '../worker/worker-client';
import {EditSession} from './edit-session';
import {QueryString} from './query-string';

@inject(WorkerClient, GistAdapter, QueryString)
export class EditSessionFactory {
  constructor(worker, gistAdapter, queryString) {
    this.worker = worker;
    this.gistAdapter = gistAdapter;
    this.queryString = queryString;
  }

  create(gist) {
    let editSesson = new EditSession(
      gist,
      this.worker,
      this.gistAdapter,
      this.queryString);
    return editSesson.resetWorker().then(() => editSesson);
  }
}
