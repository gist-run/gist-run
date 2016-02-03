import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {clientID} from '../worker/worker-client';
import {RunEvent} from '../editing/run-event';
import {workerPage} from '../config';

@inject(EventAggregator)
export class ResultPanel {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  run() {
    this.iframe.src = `${workerPage}run/${clientID}/index.html`;
  }

  attached() {
    this.subscription = this.eventAggregator.subscribe(RunEvent, ::this.run);
  }

  detached() {
    this.subscription.dispose();
  }
}
