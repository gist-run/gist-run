import { autoinject } from 'aurelia-framework';
import { EditorResolver } from './editor-resolver';
import { MultiFileEditor } from './multi-file-editor';
import { EditSession } from './edit-session';
import { Gist } from './github/gist';
import { workerPage } from './config';
import { BatchingFileSystem } from './batching-file-system';
import { WorkerClient } from './worker-client';
import { WorkerFileStore } from './worker-file-store';

@autoinject
export class EditSessionFactory {
  constructor(
    private readonly editorResolver: EditorResolver,
    private readonly workerClient: WorkerClient) {
  }

  public async create(gist: Gist, targetFrame: HTMLIFrameElement) {
    const id = +performance.now().toFixed(0);
    const workerStore = new WorkerFileStore(id, this.workerClient);
    const fileSystem = new BatchingFileSystem(500, [workerStore]);
    const monacoEditor = await this.editorResolver.value;
    const editor = new MultiFileEditor(monacoEditor, fileSystem);
    const run = () => targetFrame.src = `${workerPage}run/${id}/index.html`;
    return new EditSession(editor, gist, run);
  }
}
