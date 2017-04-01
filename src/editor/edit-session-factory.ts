import { autoinject } from 'aurelia-framework';
import { WorkerClient } from './worker-client';
import { EditorResolver } from './editor-resolver';
import { EditorAdapter } from './editor-adapter';
import { EditSession } from './edit-session';
import { Gist } from './github/gist';
import { workerPage } from './config';

@autoinject
export class EditSessionFactory {
  constructor(
    private readonly editorResolver: EditorResolver,
    private readonly worker: WorkerClient) {
  }

  public async create(gist: Gist, targetFrame: HTMLIFrameElement) {
    const clientID = +performance.now().toFixed(0);

    const editor = await this.editorResolver.value;
    let reset = true;
    const processFiles = (files: FilesMap) => {
      this.worker.sendMessage({ clientID, reset, files });
      reset = false;
    };
    const editorAdapter = new EditorAdapter(editor, processFiles);

    const run = () => targetFrame.src = `${workerPage}run/${clientID}/index.html`;

    return new EditSession(editorAdapter, gist, run);
  }
}
