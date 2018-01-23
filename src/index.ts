import { loadMonaco } from './monaco-loader';
import { activateWorker, sendWorkerMessage } from './worker-client';
import * as Split from 'split.js';

loadMonaco().then(() => {
  const editor = monaco.editor.create(document.getElementById('editor')!, {
    value: [
      'function x() {',
      '\tconsole.log("Hello world!");',
      '}'
    ].join('\n'),
    language: 'javascript',
    minimap: { enabled: false },
    scrollBeyondLastLine: false
  });
  addEventListener('resize', () => editor.layout());
  editor.layout();
});

activateWorker();
sendWorkerMessage({ type: 'files', session: 42342, files: { 'foo.js': 'hello world' } });

Split(
  ['#nav-panel', '#editor', '#output'],
  {
    direction: 'horizontal',
    gutterSize: 16,
    sizes: document.documentElement.clientWidth < 1800 ? [16, 45, 39] : [10, 50, 40],
    minSize: 150,
    snapOffset: 0,
    onDrag: () => document.body.dispatchEvent(new CustomEvent('resize', { bubbles: true }))
  });
