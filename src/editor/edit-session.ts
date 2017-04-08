import { Gist } from './github/gist';
import { MultiFileEditor } from './multi-file-editor';

export class EditSession implements Disposable {
  public files: string[] = [];
  public currentFile: string | null = null;

  private running = true;
  private nextFile = 0;

  constructor(
    private readonly editor: MultiFileEditor,
    public gist: Gist, // TODO: refactor
    private readonly run: () => void
  ) {
    editor.consistent(() => {
      if (this.running) {
        this.run();
      }
    });

    for (const [name, { content }] of Object.entries(gist.files)) {
      this.files.push(name);
      this.editor.add(name, content);
    }

    this.sortFiles();

    this.activateFile(this.files[0]);
  }

  public toggleRun() {
    this.running = !this.running;
    if (this.running) {
      this.run();
    }
  }

  public activateFile(name: string) {
    this.currentFile = name;
    this.editor.activate(name);
  }

  public focusEditor() {
    setTimeout(() => this.editor.focus());
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
    this.editor.add(name, '');
    this.files.push(name);
    this.activateFile(name);
    this.focusFilename();
  }

  public deleteFile(name: string) {
    if (this.currentFile === name) {
      this.activateFile(this.files.find(f => f !== name));
    }
    const index = this.files.indexOf(name);
    this.editor.remove(name);
    this.files.splice(index, 1);
  }

  public renameFile(oldName: string, newName: string) {
    if (oldName === newName) {
      return;
    }
    this.editor.rename(oldName, newName);
    const index = this.files.indexOf(oldName);
    this.files.splice(index, 1, newName);
    this.sortFiles();
  }

  public dispose() {
    this.editor.dispose();
  }

  private sortFiles() {
    this.files.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  }
}
