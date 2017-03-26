import { Gist } from './github/gist';

export class EditSession implements monaco.IDisposable {
  private readonly models: { [filename: string]: monaco.editor.IModel; } = Object.create(null);
  private readonly viewState: { [filename: string]: monaco.editor.IEditorViewState; } = Object.create(null);
  private readonly fileDirty: { [filename: string]: boolean; } = Object.create(null);
  private readonly disposables: monaco.IDisposable[] = [];
  private delay = 300;
  private timeoutHandle = 0;
  private dirty = false;
  private filename: string | null = null;

  constructor(
    private readonly editor: monaco.editor.IStandaloneCodeEditor,
    private readonly gist: Gist
  ) {
    // load model states and previously selected file
    // load unsaved changes
    // create editor models
    // select a file
    // populate the worker's cache
    // run

    // sync gist when
    //   model changes
    //
    for (const [filename, { content }] of Object.entries(gist.files)) {
      const model = monaco.editor.createModel(content, undefined, monaco.Uri.file(filename));
      this.models[filename] = model;
      this.fileDirty[filename] = false;
    }
    this.disposables.push(editor.onDidChangeModelContent(() => this.modelContentChanged()));
    this.setModel('index.html');
  }

  public setModel(filename: string) {
    if (this.filename !== null) {
      this.syncWithModel();
      this.viewState[this.filename] = this.editor.saveViewState();
    }
    const model = this.models[filename];
    this.editor.setModel(model);
    this.filename = filename;
    const viewState = this.viewState[filename];
    if (viewState !== undefined) {
      this.editor.restoreViewState(viewState);
    }
    this.editor.focus();
  }

  public dispose() {
    for (const model of Object.values(this.models)) {
      model.dispose();
    }
    for (const disposable of this.disposables) {
      disposable.dispose();
    }
  }

  private modelContentChanged() {
    this.fileDirty[this.filename] = true;
    this.dirty = true;

    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => this.syncWithModel(), this.delay);
  }

  private syncWithModel() {
    if (this.timeoutHandle !== 0) {
      this.gist.files[this.filename].content = this.editor.getValue();
    }

    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = 0;
  }
}
