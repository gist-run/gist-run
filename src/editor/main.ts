import { Aurelia } from 'aurelia-framework';
import { activate } from './worker-activator';

export function configure(aurelia: Aurelia) {
  aurelia.use.basicConfiguration();
  aurelia.start().then(() => aurelia.setRoot().then(activate));
}
