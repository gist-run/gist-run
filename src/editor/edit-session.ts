import { Gist } from './github/gist';
import { EditorAdapter } from './editor-adapter';

export class EditSession implements monaco.IDisposable {
  public gist: Gist;
  public files: FileInfo[] = [];
  public dirty = false;

  private readonly editorAdapter: EditorAdapter;

  constructor(editor: monaco.editor.IStandaloneCodeEditor, gist: Gist) {
    this.gist = gist;
    this.editorAdapter = new EditorAdapter(editor, (filename, content) => this.contentChanged(filename, content));
    for (const [filename, { content }] of Object.entries(gist.files)) {
      this.editorAdapter.add(filename, content);
      this.files.push({ filename, dirty: false });
    }
    this.sortFiles();
    this.editorAdapter.activate('index.html');
  }

  public dispose() {
    this.editorAdapter.dispose();
  }

  private sortFiles() {
    this.files.sort((a, b) => a.filename.localeCompare(b.filename, undefined, { sensitivity: 'base' }));
  }

  private contentChanged(filename: string, content: string) {
    if (this.gist.files[filename].content === content) {
      return;
    }
    this.gist.files[filename].content = content;
    this.dirty = true;
    this.files.find(f => f.filename === filename).dirty = true;
  }
}

export interface FileInfo {
  filename: string;
  dirty: boolean;
}
