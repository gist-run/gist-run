import { Gist } from './github/gist';
import { MultiFileEditor } from './multi-file-editor';

export class EditSession implements Disposable {
  public files: string[] = [];
  public currentFile: string | null = null;

  private autoRun = true;
  private nextFile = 0;

  constructor(
    private readonly editor: MultiFileEditor,
    private gist: Gist,
    private readonly run: () => void
  ) {
    editor.consistent(() => {
      if (this.autoRun) {
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

  public toggleAutoRun() {
    this.autoRun = !this.autoRun;
    if (this.autoRun) {
      this.run();
    }
  }

  public get description() {
    return this.gist.description;
  }
  public set description(value) {
    this.gist.description = value;
  }

  public activateFile(name: string) {
    this.currentFile = name;
    this.editor.activate(name);
  }

  public focusEditor() {
    setTimeout(() => this.editor.focus());
    setTimeout(() => this.editor.focus(), 20);
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
    let name: string;
    do {
      name = `new-${this.nextFile}`;
      this.nextFile++;
    } while (this.files.find(f => f === name));
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
    if (this.files.find(f => f !== oldName && f === newName)) {
      const current = this.currentFile;
      this.currentFile = '';
      this.currentFile = current;
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
