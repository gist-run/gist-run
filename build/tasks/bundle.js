var gulp = require('gulp');
var glob = require("glob");
var rjs = require("requirejs");
var runSequence = require('run-sequence');

var configBase = {
  mainConfigFile: './config.js'
};

gulp.task('bundle-everything', done => {
  var config = {
    name: 'bundle-manifest',
    out: 'bundle.js',
    rawText: {
      'bundle-manifest': ''
    },
    exclude: ['ace'],
    optimize: 'none'
  };

  var thirdParty = `
    "aurelia-binding",
    "aurelia-bootstrapper",
    "aurelia-dependency-injection",
    "aurelia-event-aggregator",
    "aurelia-framework",
    "aurelia-history",
    "aurelia-history-browser",
    "aurelia-loader",
    "aurelia-loader-default",
    "aurelia-logging",
    "aurelia-logging-console",
    "aurelia-metadata",
    "aurelia-pal",
    "aurelia-pal-browser",
    "aurelia-path",
    "aurelia-polyfills",
    "aurelia-router",
    "aurelia-route-recognizer",
    "aurelia-task-queue",
    "aurelia-templating",
    "aurelia-templating-binding",

    "aurelia-templating-router",
    "aurelia-templating-resources",

    "split",
    "alertify",
    "text"`;

  glob("dist/**/*.{js,html,css}", (er, files) => {
    config.rawText['bundle-manifest'] = 'define(["' +
      files.map(f => f.replace(/^dist\//i, '')
        .replace(/\.js$/i, '')
        .replace(/^.+\.(?:(?:html)|(?:css))$/, 'text!$&'))
        .join('","') + '",' + thirdParty + '], function() {});';

    Object.assign(config, configBase);
    rjs.optimize(config, () => done());
	});
});

gulp.task('bundle', done => {
  runSequence(
    'build',
    ['bundle-everything'],
    done
  );
});

function unbundle(name, done) {
  var config = {
    name: name + '-manifest',
    out: name + '.js',
    rawText: {},
    optimize: 'none'
  };
  config.rawText[name + '-manifest'] = 'define([], function() {});';

  Object.assign(config, configBase);
  rjs.optimize(config, () => done());
}

gulp.task('unbundle-everything', done => {
   unbundle('bundle', done);
});

gulp.task('unbundle', ['unbundle-everything']);
