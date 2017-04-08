export interface FileSystem extends Disposable {
  write(name: string, contentAccessor: () => string): void;
  delete(name: string): void;
  consistent(callback: () => void): void;
}
