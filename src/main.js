import {activate as activateWorker} from './worker/worker-activator';

export function configure(aurelia) {
  aurelia.use.standardConfiguration();

  aurelia.start()
    .then(() => {
      // hack to remove /deep/ combinator
      Array.prototype.filter.call(document.querySelectorAll('style'), s => /\.aurelia-hide/.test(s.textContent))[0].textContent = `.aurelia-hide { display:none !important; }`;

      if ('serviceWorker' in navigator) {
        let root = /\/embed/.test(location.href) ? 'ui/embed/app' : 'ui/app';
        return aurelia.setRoot(root).then(activateWorker);
      }
      return aurelia.setRoot('ui/fallback');
    });
}
