import {activate as activateWorker} from './worker/worker-activator';

export function configure(aurelia) {
  aurelia.use.standardConfiguration();

  aurelia.start()
    .then(() => {
      if ('serviceWorker' in navigator) {
        let root = /\/embed/.test(location.href) ? 'ui/embed/app' : 'ui/app';
        return aurelia.setRoot(root).then(activateWorker);
      }
      return aurelia.setRoot('ui/fallback');      
    });
}
