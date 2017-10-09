import { FileStore } from './file-store';

export class MemoryFileStore implements FileStore {
  public readonly files: FilesMap = {};

  public store(files: FilesMap) {
    for (const [name, content] of Object.entries(files)) {
      if (content === null) {
        delete this.files[name];
      } else {
        this.files[name] = content;
      }
    }
    return Promise.resolve();
  }
}
