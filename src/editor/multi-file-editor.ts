import { FileSystem } from './file-system';

export class MultiFileEditor implements Disposable {
  private readonly models: { [name: string]: monaco.editor.IModel; } = Object.create(null);
  private readonly viewState: { [name: string]: monaco.editor.ICodeEditorViewState; } = Object.create(null);
  private name: string | null = null;

  constructor(
    private readonly editor: monaco.editor.IStandaloneCodeEditor,
    private readonly fileSystem: FileSystem
  ) {
  }

  public consistent(callback: () => void) {
    this.fileSystem.consistent(callback);
  }

  public activate(name: string | null) {
    if (this.name === name) {
      return;
    }
    if (this.name !== null) {
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
    const contentAccessor = () => model.getValue();
    model.onDidChangeContent(() => this.fileSystem.write(name, contentAccessor));
    this.fileSystem.write(name, contentAccessor);
  }

  public remove(name: string) {
    if (this.name === name) {
      this.name = null;
    }
    this.models[name].dispose();
    delete this.models[name];
    delete this.viewState[name];
    this.fileSystem.delete(name);
  }

  public rename(oldName: string, newName: string) {
    const isActive = this.name === oldName;
    if (isActive) {
      this.viewState[this.name] = this.editor.saveViewState();
    }
    this.viewState[newName] = this.viewState[oldName];
    const content = this.models[oldName].getValue();
    this.remove(oldName);
    this.add(newName, content);
    if (isActive) {
      this.activate(newName);
    }
  }

  public focus() {
    this.editor.focus();
  }

  public dispose() {
    for (const model of Object.values(this.models)) {
      model.dispose();
    }
    this.fileSystem.dispose();
  }
}
