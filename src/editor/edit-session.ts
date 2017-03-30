import { Gist } from './github/gist';
import { EditorAdapter } from './editor-adapter';

export class EditSession implements monaco.IDisposable {
  public files: string[] = [];
  public currentFile: string | null = null;

  private nextFile = 0;

  constructor(
    private readonly editorAdapter: EditorAdapter,
    public gist: Gist, // TODO: refactor
    private readonly run: () => void
  ) {
    for (const [name, { content }] of Object.entries(gist.files)) {
      this.files.push(name);
      this.editorAdapter.add(name, content);
    }
    this.sortFiles();
    this.activateFile(this.files[0]);
  }

  public activateFile(name: string) {
    this.currentFile = name;
    this.editorAdapter.activate(name);
  }

  public focusEditor() {
    setTimeout(() => this.editorAdapter.focus());
  }

  public focusFilename() {
    // todo: use event instead of querying dom.
    setTimeout(() => {
      const input = document.getElementById('filename-input') as HTMLInputElement;
      input.select();
      input.focus();
    });
  }

  public activateAndFocusFile(name: string) {
    this.activateFile(name);
    this.focusEditor();
  }

  public createFile() {
    const name = `new-${this.nextFile}`;
    this.editorAdapter.add(name, '');
    this.files.push(name);
    this.activateFile(name);
    this.focusFilename();
  }

  public deleteFile(name: string) {
    if (this.currentFile === name) {
      this.activateFile(this.files.find(f => f !== name));
    }
    const index = this.files.indexOf(name);
    this.editorAdapter.remove(name);
    this.files.splice(index, 1);
  }

  public renameFile(oldName: string, newName: string) {
    if (oldName === newName) {
      return;
    }
    this.editorAdapter.rename(oldName, newName);
    const index = this.files.indexOf(oldName);
    this.files.splice(index, 1, newName);
    this.sortFiles();
    if (oldName === this.currentFile) {
      this.activateFile(newName);
    }
  }

  public dispose() {
    this.editorAdapter.dispose();
  }

  private sortFiles() {
    this.files.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }
}
