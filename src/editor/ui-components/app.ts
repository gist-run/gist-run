import { autoinject } from 'aurelia-framework';
import { QueryString } from '../query-string';
import { EditorResolver } from '../editor-resolver';
import { EditSession } from '../edit-session';
import { defaultGist } from '../github/default-gist';
import { Gist } from '../github/gist';
import { Importer } from '../import/importer';
import { runUrl } from '../worker-client';

@autoinject
export class App {
  private editSession: EditSession;
  private editor: monaco.editor.IStandaloneCodeEditor;
  private runFrame: HTMLIFrameElement;

  constructor(
    private readonly queryString: QueryString,
    private readonly editorResolver: EditorResolver,
    private readonly importer: Importer) {
  }

  public async attached() {
    const [gist, editor] = await Promise.all([
      this.queryString.read(),
      this.editorResolver.value
    ]);
    this.editor = editor;
    this.setEditSession(gist);
  }

  public newGist() {
    this.setEditSession(defaultGist);
  }

  public async import(urlOrId: string) {
    try {
      const gist = await this.importer.import(urlOrId);
      this.setEditSession(gist);
    } catch (error) {
      console.error(error);
    }
  }

  private setEditSession(gist: Gist) {
    if (this.editSession) {
      this.editSession.dispose();
    }
    this.editSession = new EditSession(this.editor, gist, this.run);
  }

  private run = () => {
    this.runFrame.src = runUrl;
  }
}
