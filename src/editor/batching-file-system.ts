import { FileSystem } from './file-system';
import { FileStore } from './file-store';

export class BatchingFileSystem implements FileSystem {
  private content: { [name: string]: (() => string) | null; } = {};
  private timeoutHandle = 0;
  private callbacks: (() => void)[] = [];

  constructor(
    private readonly delay: number,
    private readonly stores: FileStore[]
  ) {
  }

  public write(name: string, contentAccessor: () => string) {
    this.content[name] = contentAccessor;
    this.scheduleFlush();
  }

  public delete(name: string) {
    this.content[name] = null;
    this.scheduleFlush();
  }

  public consistent(callback: () => void) {
    this.callbacks.push(callback);
  }

  public dispose() {
    clearTimeout(this.timeoutHandle);
    this.callbacks.splice(0, this.callbacks.length);
  }

  private scheduleFlush() {
    clearTimeout(this.timeoutHandle);
    this.timeoutHandle = setTimeout(() => this.flush(), this.delay);
  }

  private flush() {
    const files: FilesMap = {};
    for (const [name, contentAccessor] of Object.entries(this.content)) {
      if (contentAccessor === null) {
        files[name] = null;
      } else {
        files[name] = contentAccessor();
      }
    }
    this.store(files);
  }

  private async store(files: FilesMap) {
    const timeoutHandle = this.timeoutHandle;

    await Promise.all(this.stores.map(s => s.store(files)));

    if (timeoutHandle !== this.timeoutHandle) {
      return;
    }

    for (const callback of this.callbacks) {
      callback();
    }
  }
}
