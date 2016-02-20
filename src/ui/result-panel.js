import {runUrl} from '../worker/worker-client';
import {RunEvent} from '../editing/run-event';

export class ResultPanel {
  run() {
    this.iframe.src = runUrl;
  }

  attached() {
    this.subscription = RunEvent.subscribe(::this.run);
  }

  detached() {
    this.subscription.dispose();
  }
}
