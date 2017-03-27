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
      const root = /\/embed/.test(location.href) ? 'ui-components/embed-app' : 'ui-components/app';
      aurelia.setRoot(root).then(activate);
      return;
    }
    aurelia.setRoot('ui-components/fallback-app');
  });
}
