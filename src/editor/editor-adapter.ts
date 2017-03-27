export class EditorAdapter implements monaco.IDisposable {
  private readonly models: { [name: string]: monaco.editor.IModel; } = Object.create(null);
  private readonly viewState: { [name: string]: monaco.editor.IEditorViewState; } = Object.create(null);
  private readonly subscription: monaco.IDisposable;
  private delay = 500;
  private timeoutHandle = 0;
  private name: string | null = null;

  constructor(
    private readonly editor: monaco.editor.IStandaloneCodeEditor,
    private readonly contentChanged: (name: string, content: string) => void
  ) {
    this.subscription = editor.onDidChangeModelContent(() => this.modelContentChanged());
  }

  public activate(name: string | null) {
    if (this.name === name) {
      return;
    }
    if (this.name !== null) {
      this.sync();
      this.viewState[this.name] = this.editor.saveViewState();
    }
    this.name = name;
    if (name === null) {
      this.editor.setModel(null);
      return;
    }
    const model = this.models[name];
    this.editor.setModel(model);
    const viewState = this.viewState[name];
    if (viewState !== undefined) {
      this.editor.restoreViewState(viewState);
    }
  }

  public add(name: string, content: string) {
    const model = monaco.editor.createModel(content, undefined, monaco.Uri.file(name));
    this.models[name] = model;
  }

  public remove(name: string) {
    if (this.name === name) {
      this.cancelSync();
      this.name = null;
    }
    this.models[name].dispose();
    delete this.models[name];
    delete this.viewState[name];
  }

  public rename(oldName: string, newName: string) {
    this.viewState[newName] = this.viewState[this.name];
    const content = this.models[oldName].getValue();
    this.remove(oldName);
    this.add(newName, content);
    return content;
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
    this.timeoutHandle = setTimeout(() => this.sync(), this.delay);
  }

  private sync() {
    clearTimeout(this.timeoutHandle);

    if (this.timeoutHandle === 0) {
      return;
    }
    this.timeoutHandle = 0;

    const content = this.editor.getValue();
    this.contentChanged(this.name, content);
  }

  private cancelSync() {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = 0;
  }
}
