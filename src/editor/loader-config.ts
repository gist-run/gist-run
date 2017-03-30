require.config({
  paths: {
    'aurelia-binding': 'node_modules/aurelia-binding/dist/amd/aurelia-binding',
    'aurelia-bootstrapper': 'node_modules/aurelia-bootstrapper/dist/amd/aurelia-bootstrapper',
    'aurelia-dependency-injection': 'node_modules/aurelia-dependency-injection/dist/amd/aurelia-dependency-injection',
    'aurelia-event-aggregator': 'node_modules/aurelia-event-aggregator/dist/amd/aurelia-event-aggregator',
    'aurelia-framework': 'node_modules/aurelia-framework/dist/amd/aurelia-framework',
    'aurelia-loader': 'node_modules/aurelia-loader/dist/amd/aurelia-loader',
    'aurelia-loader-default': 'node_modules/aurelia-loader-default/dist/amd/aurelia-loader-default',
    'aurelia-logging': 'node_modules/aurelia-logging/dist/amd/aurelia-logging',
    'aurelia-logging-console': 'node_modules/aurelia-logging-console/dist/amd/aurelia-logging-console',
    'aurelia-metadata': 'node_modules/aurelia-metadata/dist/amd/aurelia-metadata',
    'aurelia-pal': 'node_modules/aurelia-pal/dist/amd/aurelia-pal',
    'aurelia-pal-browser': 'node_modules/aurelia-pal-browser/dist/amd/aurelia-pal-browser',
    'aurelia-path': 'node_modules/aurelia-path/dist/amd/aurelia-path',
    'aurelia-polyfills': 'node_modules/aurelia-polyfills/dist/amd/aurelia-polyfills',
    'aurelia-task-queue': 'node_modules/aurelia-task-queue/dist/amd/aurelia-task-queue',
    'aurelia-templating': 'node_modules/aurelia-templating/dist/amd/aurelia-templating',
    'aurelia-templating-binding': 'node_modules/aurelia-templating-binding/dist/amd/aurelia-templating-binding',
    'aurelia-templating-resources': 'node_modules/aurelia-templating-resources/dist/amd',
    'Split': 'node_modules/split.js/split',
    'text': 'node_modules/text/text',
    'tslib': 'node_modules/tslib/tslib',
    'vs': 'node_modules/monaco-editor/dev/vs',
  },
  packages: [
    {
      name: 'aurelia-templating-resources',
      location: 'node_modules/aurelia-templating-resources/dist/amd',
      main: 'aurelia-templating-resources'
    }
  ],
  map: {
    '*': {
      'monaco-editor': 'vs/editor/editor.main'
    }
  },
  shim: {
    Split: {
      exports: 'Split'
    }
  }
});
