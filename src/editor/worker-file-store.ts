import { WorkerClient } from './worker-client';
import { FileStore } from './file-store';

export class WorkerFileStore implements FileStore {
  constructor(
    private readonly session: number,
    private readonly worker: WorkerClient) {
  }

  public store(files: FilesMap) {
    return this.worker.sendMessage({ session: this.session, type: 'files', files });
  }
}
