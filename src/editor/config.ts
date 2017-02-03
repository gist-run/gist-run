SystemJS.config({
  map: {
    'aurelia-binding': 'node_modules/aurelia-binding/dist/amd/aurelia-binding.js',
    'aurelia-bootstrapper': 'node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper.js',
    'aurelia-dependency-injection': 'node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection.js',
    'aurelia-event-aggregator': 'node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator.js',
    'aurelia-framework': 'node_modules/aurelia-framework/dist/amd/aurelia-framework.js',
    'aurelia-loader': 'node_modules/aurelia-loader/dist/amd/aurelia-loader.js',
    'aurelia-loader-default': 'node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default.js',
    'aurelia-logging': 'node_modules/aurelia-logging/dist/amd/aurelia-logging.js',
    'aurelia-logging-console': 'node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console.js',
    'aurelia-metadata': 'node_modules/aurelia-metadata/dist/amd/aurelia-metadata.js',
    'aurelia-pal': 'node_modules/aurelia-pal/dist/amd/aurelia-pal.js',
    'aurelia-pal-browser': 'node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser.js',
    'aurelia-path': 'node_modules/aurelia-path/dist/amd/aurelia-path.js',
    'aurelia-polyfills': 'node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills.js',
    'aurelia-task-queue': 'node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue.js',
    'aurelia-templating': 'node_modules/aurelia-templating/dist/amd/aurelia-templating.js',
    'aurelia-templating-binding': 'node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding.js',
    'aurelia-templating-resources': 'node_modules/aurelia-templating-resources/dist/amd',
  },
  packages: {
    '.': {},
    'aurelia-templating-resources': { main: 'aurelia-templating-resources.js' },
  }
});

function patchDefaultLoader(DefaultLoader: any) {
  // fix issue where the map function was using `System.map[id] = source`
  // https://github.com/aurelia/loader-default/blob/1.0.0/src/index.js#L222
  DefaultLoader.prototype.map = function (id: string, source: string) {
    // System.map[id] = source;                 // <--- original
    SystemJS.config({ map: { [id]: source } });   // <--- fix
  };
}

SystemJS.import('aurelia-loader-default')
  .then(({ DefaultLoader }) => patchDefaultLoader(DefaultLoader))
  .then(() => SystemJS.import('aurelia-bootstrapper'));
