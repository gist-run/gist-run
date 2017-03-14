import 'monaco-editor';

export class App {
  public container: HTMLDivElement;

  public attached() {
    const editor = monaco.editor.create(this.container, {
      value: [
        'function x() {',
        '\tconsole.log("Hello world!!");',
        '}'
      ].join('\n'),
      language: 'html'
    });
    window.addEventListener('resize', () => editor.layout());
  }
}
