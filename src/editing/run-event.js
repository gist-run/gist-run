import {EventAggregator} from 'aurelia-event-aggregator';

const bus = new EventAggregator();

export const RunEvent = {
  publish: () => bus.publish('run'),
  subscribe: callback => bus.subscribe('run', callback)
};
