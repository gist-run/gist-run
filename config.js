System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "es7.functionBind"
    ]
  },
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "bundle": [
      "github:systemjs/plugin-text@0.0.3",
      "github:systemjs/plugin-text@0.0.3/text",
      "npm:split.js@1.0.6",
      "npm:split.js@1.0.6/split",
      "npm:alertify.js@1.0.9",
      "npm:alertify.js@1.0.9/dist/js/alertify",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "npm:aurelia-history-browser@1.0.0-beta.1.0.1/aurelia-history-browser",
      "npm:core-js@1.2.6",
      "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "npm:aurelia-history@1.0.0-beta.1",
      "npm:core-js@1.2.6/client/shim.min",
      "npm:aurelia-pal@1.0.0-beta.1.0.2/aurelia-pal",
      "npm:aurelia-history@1.0.0-beta.1/aurelia-history",
      "github:jspm/nodelibs-process@0.1.2",
      "github:jspm/nodelibs-process@0.1.2/index",
      "npm:process@0.11.2",
      "npm:process@0.11.2/browser",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
      "npm:aurelia-loader-default@1.0.0-beta.1.0.2/aurelia-loader-default",
      "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "npm:aurelia-metadata@1.0.0-beta.1",
      "npm:aurelia-loader@1.0.0-beta.1.0.1/aurelia-loader",
      "npm:aurelia-metadata@1.0.0-beta.1/aurelia-metadata",
      "npm:aurelia-path@1.0.0-beta.1",
      "npm:aurelia-path@1.0.0-beta.1/aurelia-path",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/aurelia-templating-router",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/route-loader",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1/aurelia-dependency-injection",
      "npm:aurelia-templating@1.0.0-beta.1.0.3/aurelia-templating",
      "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "npm:aurelia-logging@1.0.0-beta.1.1.1/aurelia-logging",
      "npm:aurelia-binding@1.0.0-beta.1.0.5/aurelia-binding",
      "npm:aurelia-task-queue@1.0.0-beta.1.0.1/aurelia-task-queue",
      "npm:aurelia-router@1.0.0-beta.1.0.1",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/router-view",
      "npm:aurelia-templating-router@1.0.0-beta.1.0.5/route-href",
      "npm:aurelia-router@1.0.0-beta.1.0.1/aurelia-router",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1/aurelia-event-aggregator",
      "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "npm:aurelia-route-recognizer@1.0.0-beta.1/aurelia-route-recognizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/aurelia-templating-resources",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/compose",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/with",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/sanitize-html",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/if",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/show",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/replaceable",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/compile-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/focus",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/view-spy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/dynamic-element",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/css-resource",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/binding-mode-behaviors",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/html-sanitizer",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/throttle-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/debounce-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/signal-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/binding-signaler",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/update-trigger-binding-behavior",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat-strategy-locator",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/analyze-view-factory",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/repeat-utilities",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/array-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/null-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/set-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/map-repeat-strategy",
      "npm:aurelia-templating-resources@1.0.0-beta.1.0.4/number-repeat-strategy",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
      "npm:aurelia-templating-binding@1.0.0-beta.1.0.2/aurelia-templating-binding",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2",
      "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2/aurelia-bootstrapper",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.3",
      "npm:aurelia-pal-browser@1.0.0-beta.1.0.3/aurelia-pal-browser",
      "npm:aurelia-framework@1.0.0-beta.1.0.8",
      "npm:aurelia-framework@1.0.0-beta.1.0.8/aurelia-framework",
      "ui/split-panel.html!github:systemjs/plugin-text@0.0.3",
      "ui/save-buttons.html!github:systemjs/plugin-text@0.0.3",
      "ui/result-panel.html!github:systemjs/plugin-text@0.0.3",
      "ui/rate-alert.html!github:systemjs/plugin-text@0.0.3",
      "ui/nav-panel.html!github:systemjs/plugin-text@0.0.3",
      "ui/header.html!github:systemjs/plugin-text@0.0.3",
      "ui/fallback.html!github:systemjs/plugin-text@0.0.3",
      "ui/edit-session-commands.html!github:systemjs/plugin-text@0.0.3",
      "ui/edit-file-panel.html!github:systemjs/plugin-text@0.0.3",
      "ui/app.html!github:systemjs/plugin-text@0.0.3",
      "ui/embed/app.html!github:systemjs/plugin-text@0.0.3",
      "worker/worker-client",
      "worker/worker-activator",
      "config",
      "ui/embed/app",
      "editing/edit-session-factory",
      "editing/query-string",
      "ui/focus",
      "editing/gist-adapter",
      "editing/edit-session",
      "util",
      "github/gists",
      "github/default-gist",
      "github/user",
      "editing/file",
      "editing/run-event",
      "editing/current-file-changed-event",
      "github/api-client",
      "github/access-token",
      "github/oauth",
      "editing/editor-mode",
      "github/rate-limit",
      "github:ajaxorg/ace-builds@1.2.3",
      "github:ajaxorg/ace-builds@1.2.3/ext-modelist",
      "github:ajaxorg/ace-builds@1.2.3/ace",
      "ui/stack-overflow-markdown",
      "ui/split-panel",
      "ui/save-buttons",
      "ui/result-panel",
      "ui/rate-alert",
      "ui/nav-panel",
      "ui/header",
      "ui/ga",
      "ui/focus-target",
      "ui/fallback",
      "ui/app",
      "import/importer",
      "import/gist",
      "import/jsfiddle",
      "import/plunker",
      "ui/ace-editor",
      "main"
    ]
  },

  map: {
    "ace": "github:ajaxorg/ace-builds@1.2.3",
    "alertify.js": "npm:alertify.js@1.0.9",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
    "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
    "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "core-js": "npm:core-js@1.2.6",
    "github/octicons": "github:github/octicons@3.3.0",
    "primer/primer": "github:primer/primer@2.5.0",
    "split.js": "npm:split.js@1.0.6",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-binding@1.0.0-beta.1.0.5": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.1.0.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.1.0.8",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.1.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.1.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.1.0.3",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.1.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.1.0.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.1.0.5",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1"
    },
    "npm:aurelia-framework@1.0.0-beta.1.0.8": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.1.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-loader-default@1.0.0-beta.1.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-loader@1.0.0-beta.1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-metadata@1.0.0-beta.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.1.0.3": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-router@1.0.0-beta.1.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.1.1.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-task-queue@1.0.0-beta.1.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.1.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.1.0.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.1.0.5": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.1.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.1.0.3"
    },
    "npm:aurelia-templating@1.0.0-beta.1.0.3": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.1.0.5",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.1.0.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.1.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.1.0.2",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.1.0.1",
      "core-js": "npm:core-js@1.2.6"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
