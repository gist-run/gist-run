import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {runUrl} from '../worker/worker-client';
import {RunEvent} from '../editing/run-event';

@inject(EventAggregator)
export class ResultPanel {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  run() {
    this.iframe.src = runUrl;
  }

  attached() {
    this.subscription = this.eventAggregator.subscribe(RunEvent, ::this.run);
  }

  detached() {
    this.subscription.dispose();
  }
}
