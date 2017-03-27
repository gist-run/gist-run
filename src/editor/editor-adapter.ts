export class EditorAdapter implements monaco.IDisposable {
  private readonly models: { [filename: string]: monaco.editor.IModel; } = Object.create(null);
  private readonly viewState: { [filename: string]: monaco.editor.IEditorViewState; } = Object.create(null);
  private readonly subscription: monaco.IDisposable;
  private delay = 300;
  private timeoutHandle = 0;
  private filename: string | null = null;

  constructor(
    private readonly editor: monaco.editor.IStandaloneCodeEditor,
    private readonly contentChanged: (filename: string, newContent: string) => void
  ) {
    this.subscription = editor.onDidChangeModelContent(() => this.modelContentChanged());
  }

  public activate(filename: string | null) {
    if (this.filename !== null) {
      this.syncWithModel();
      this.viewState[this.filename] = this.editor.saveViewState();
    }
    this.filename = filename;
    if (filename === null) {
      this.editor.setModel(null);
      return;
    }
    const model = this.models[filename];
    this.editor.setModel(model);
    const viewState = this.viewState[filename];
    if (viewState !== undefined) {
      this.editor.restoreViewState(viewState);
    }
  }

  public add(filename: string, content: string) {
    const model = monaco.editor.createModel(content, undefined, monaco.Uri.file(filename));
    this.models[filename] = model;
  }

  public remove(filename: string) {
    this.models[filename].dispose();
    delete this.models[filename];
    delete this.viewState[filename];
  }

  public focus() {
    this.editor.focus();
  }

  public dispose() {
    for (const model of Object.values(this.models)) {
      model.dispose();
    }
    this.subscription.dispose();
  }

  private modelContentChanged() {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => this.syncWithModel(), this.delay);
  }

  private syncWithModel() {
    clearTimeout(this.timeoutHandle);

    if (this.timeoutHandle === 0) {
      return;
    }
    this.timeoutHandle = 0;

    const content = this.editor.getValue();
    this.contentChanged(this.filename, content);
  }
}
