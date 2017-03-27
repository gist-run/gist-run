import { Gist } from './github/gist';
import { EditorAdapter } from './editor-adapter';
import { WorkerClient } from './worker-client';

export class EditSession implements monaco.IDisposable {
  public gist: Gist;
  public files: FileInfo[] = [];
  public currentFile: FileInfo | null = null;
  public dirty = false;

  private readonly editorAdapter: EditorAdapter;
  private readonly worker: WorkerClient;
  private nextFile = 0;

  constructor(
    editor: monaco.editor.IStandaloneCodeEditor,
    gist: Gist,
    private readonly run: () => void
  ) {
    this.gist = gist;
    this.editorAdapter = new EditorAdapter(editor, (name, content) => this.contentChanged(name, content));
    this.worker = new WorkerClient();

    const dirty = !('id' in gist);
    this.dirty = dirty;
    for (const [name, { content }] of Object.entries(gist.files)) {
      this.files.push({ name, content, dirty });
      this.editorAdapter.add(name, content);
    }
    this.sortFiles();
    this.activateFile(this.files[0]);

    this.worker.resetFiles(this.files).then(this.run);
  }

  public activateFile(file: FileInfo) {
    this.currentFile = file;
    this.editorAdapter.activate(file.name);
  }

  public focus() {
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

  public activateAndFocusFile(file: FileInfo) {
    this.activateFile(file);
    this.focus();
  }

  public createFile() {
    const file = { name: `new-${this.nextFile}`, content: '', dirty: true };
    this.files.push(file);
    this.editorAdapter.add(file.name, file.content);
    this.activateFile(file);
    this.focusFilename();
    this.worker.writeFile(file).then(this.run);
  }

  public deleteFile(file: FileInfo) {
    if (this.currentFile === file) {
      this.activateFile(this.files.find(f => f !== file));
    }
    this.dirty = true;
    const index = this.files.indexOf(file);
    this.files.splice(index, 1);
    this.editorAdapter.remove(file.name);
    this.worker.deleteFile(file).then(this.run);
  }

  public renameFile(file: FileInfo, newName: string) {
    this.dirty = true;
    const oldName = file.name;
    file.name = newName;
    file.content = this.editorAdapter.rename(oldName, newName);
    file.dirty = true;
    this.sortFiles();
    Promise.all([
      this.worker.deleteFile({ name: oldName, content: '' }),
      this.worker.writeFile(file)
    ]).then(this.run);
  }

  public dispose() {
    this.editorAdapter.dispose();
  }

  private sortFiles() {
    this.files.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
  }

  private contentChanged(filename: string, content: string) {
    if (this.gist.files[filename].content === content) {
      return;
    }
    this.dirty = true;
    const file = this.files.find(f => f.name === filename);
    file.dirty = true;
    file.content = content;
    this.worker.writeFile(file).then(this.run);
  }
}

export interface FileInfo {
  name: string;
  content: string;
  dirty: boolean;
}
