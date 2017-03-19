import 'monaco-editor';

export class App {
  public container: HTMLDivElement;

  public attached() {
    const editor = monaco.editor.create(this.container, { model: null });
    monaco.editor.createModel(
      `export const foo = 'bar';`, undefined, monaco.Uri.file('constants.ts'));
    const something = monaco.editor.createModel(
      `import {foo} from './constants';\nconsole.log(foo);`, undefined, monaco.Uri.file('something.ts'));

    editor.setModel(something);

    //    editor.saveViewState()
    window.addEventListener('resize', () => editor.layout());
  }
}
