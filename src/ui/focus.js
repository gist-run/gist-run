import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class Focus {
  constructor(eventAggregator) {
    this.eventAggregator = eventAggregator;
  }

  set(name) {
    let e = new SetFocusEvent(name);
    this.eventAggregator.publish(e);
    return e.handled;
  }
}

export class SetFocusEvent {
  constructor(name) {
    this.name = name;
    this.handled = false;
  }
}
