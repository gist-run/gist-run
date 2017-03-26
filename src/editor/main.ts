import 'monaco-editor';
import { Aurelia } from 'aurelia-framework';
import { activate } from './worker-activator';

export function configure(aurelia: Aurelia) {
  aurelia.use.basicConfiguration();

  aurelia.container.registerInstance(Window, window);
  aurelia.container.registerInstance(Document, document);
  aurelia.container.registerInstance(Location, location);
  aurelia.container.registerInstance(History, history);

  aurelia.start().then(() => {
    if ('serviceWorker' in navigator) {
      const root = /\/embed/.test(location.href) ? 'embed/app' : 'app';
      aurelia.setRoot(root).then(activate);
      return;
    }
    aurelia.setRoot('fallback');
  });
}
