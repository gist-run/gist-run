interface FilesMessage {
  clientID: number;
  reset: boolean;
  files: FilesMap;
}

interface FilesMap { [name: string]: string | null; }
