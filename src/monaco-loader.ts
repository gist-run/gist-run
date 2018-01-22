const cdnBase = 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.10.1/min';

const loaderProxyScript = `self.MonacoEnvironment = {
  baseUrl: '${cdnBase}'
};
importScripts('${cdnBase}/vs/base/worker/workerMain.js');`

/**
 * Loads monaco from a CDN. Makes some adjustments to monaco's loader script to allow
 * it to run alongside parcel.
 */
export function loadMonaco(): Promise<void> {
  return fetch(`${cdnBase}/vs/loader.js`, { mode: 'cors' })
    .then(response => response.text())
    .then(text => {
      const monacoLoader = {} as any;
      window.monacoLoader = monacoLoader;
      text = text
        .replace(/var\s+_amdLoaderGlobal\s*=\s*this/, 'var _amdLoaderGlobal = window.monacoLoader')
        .replace(/this\.isNode\s*=\s*e\.isNode/, 'this.isNode = false');
      eval(text);
      monacoLoader.require.config({ paths: { 'vs': `${cdnBase}/vs` } });
      window.define = monacoLoader.define;
      window.MonacoEnvironment = {
        getWorkerUrl: () => URL.createObjectURL(new Blob([loaderProxyScript], { type: 'application/javascript' }))
      };
      return new Promise<void>(resolve => monacoLoader.require(['vs/editor/editor.main'], resolve));
    });
}
