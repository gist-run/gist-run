
const rjs = require('requirejs');
const config = require('./dist/editor/loader-config').config;
// @ts-check
const glob = require('glob');
const globp = (pattern, options) => new Promise((resolve, reject) => {
  glob(pattern, options, (err, matches) => err ? reject(err) : resolve(matches));
});

config.baseUrl = 'dist/editor';
config.name = 'bundle-manifest';
config.rawText = { 'bundle-manifest': '' };
config.optimize = 'none';
// config.out = 'dist/editor/bundle.js';
config.out = (text, sourceMapText) => {
  const { minify } = require('uglify-es');
  const { writeFileSync } = require('fs');
  const { code } = minify(text);

  writeFileSync('dist/editor/bundle.js', text);
  writeFileSync('dist/editor/bundle.min.js', code);
}

const thirdParty = Object.keys(config.paths).concat(config.packages.map(p => p.name));

for (const [key, value] of Object.entries(config.paths)) {
  config.paths[key] = '../../' + value;
}

config.paths.vs = 'empty:';

for (const package of config.packages) {
  package.location = '../../' + package.location;
}

const ignore = ['bundle.js', 'bundle.min.js', 'loader-config.js', 'index.html', 'authorized.html']
  .map(f => `dist/editor/${f}`);

async function bundle() {
  const modules = (await globp('dist/editor/**/*.{js,html}', { ignore }))
    .map(f => f.replace(/^dist\/editor\//i, '')
      .replace(/\.js$/i, '')
      .replace(/^.+\.(?:(?:html)|(?:css))$/, 'text!$&'))
    .concat(thirdParty);
  config.rawText['bundle-manifest'] = `define(["${modules.join('","')}"], function() {});`;
  return new Promise(resolve => rjs.optimize(config, resolve));
}

async function unbundle() {
  config.rawText['bundle-manifest'] = 'define([], function() {});';
  return new Promise(resolve => rjs.optimize(config, resolve));
}

const command = process.argv[2];
switch (command) {
  case 'bundle':
    bundle();
    break;
  case 'unbundle':
    unbundle();
    break;
  default:
    throw new Error(`Invalid command: "${command}".`);
}