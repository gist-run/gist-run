export function configure(aurelia) {
  aurelia.use.standardConfiguration();

  aurelia.start()
    .then(() => {
      if ('serviceWorker' in navigator) {
        aurelia.setRoot('ui/app');
        return;
      }
      aurelia.setRoot('ui/fallback');
    });
}
