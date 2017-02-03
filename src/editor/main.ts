import { Aurelia } from 'aurelia-framework';

export function configure(aurelia: Aurelia) {
  aurelia.use.basicConfiguration();
  aurelia.start().then(() => aurelia.setRoot());
}
