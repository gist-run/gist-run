export interface FileStore {
  store(files: FilesMap): Promise<void>;
}
