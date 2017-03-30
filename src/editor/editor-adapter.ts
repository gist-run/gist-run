export class EditorAdapter implements monaco.IDisposable {
  private readonly models: { [name: string]: monaco.editor.IModel; } = Object.create(null);
  private readonly viewState: { [name: string]: monaco.editor.IEditorViewState; } = Object.create(null);
  private readonly batcher: FileOperationBatcher;
  private name: string | null = null;

  constructor(
    private readonly editor: monaco.editor.IStandaloneCodeEditor,
    processFiles: (files: FilesMap) => void
  ) {
    this.batcher = new FileOperationBatcher(500, name => this.models[name].getValue(), processFiles);
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
    model.onDidChangeContent(() => this.batcher.enqueueOperation(name, 'write'));
    this.batcher.enqueueOperation(name, 'write');
  }

  public remove(name: string) {
    if (this.name === name) {
      this.name = null;
    }
    this.models[name].dispose();
    delete this.models[name];
    delete this.viewState[name];
    this.batcher.enqueueOperation(name, 'delete');
  }

  public rename(oldName: string, newName: string) {
    if (this.name === oldName) {
      this.viewState[this.name] = this.editor.saveViewState();
    }
    this.viewState[newName] = this.viewState[oldName];
    const content = this.models[oldName].getValue();
    this.remove(oldName);
    this.add(newName, content);
    this.batcher.enqueueOperation(oldName, 'delete');
    this.batcher.enqueueOperation(newName, 'write');
  }

  public focus() {
    this.editor.focus();
  }

  public dispose() {
    for (const model of Object.values(this.models)) {
      model.dispose();
    }
    this.batcher.dispose();
  }
}

class FileOperationBatcher {
  private operations: { [name: string]: 'write' | 'delete'; } = {};
  private handle = 0;

  constructor(
    private readonly delay: number,
    private readonly getContent: (name: string) => string,
    private readonly processBatch: (files: FilesMap) => void) {
  }

  public enqueueOperation(name: string, operation: 'write' | 'delete') {
    this.operations[name] = operation;
    clearTimeout(this.handle);
    this.handle = setTimeout(this.flushOperations, this.delay);
  }

  private flushOperations = () => {
    const files: FilesMap = {};
    for (const [name, operation] of Object.entries(this.operations)) {
      if (operation === 'write') {
        files[name] = this.getContent(name);
      } else {
        files[name] = null;
      }
    }
    this.processBatch(files);
  }

  public dispose() {
    clearTimeout(this.handle);
  }
}
