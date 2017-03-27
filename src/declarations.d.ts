interface GistFile {
  name: string;
  content: string;
}

interface WriteGistFileMessage {
  clientID: number;
  action: 'writeFile';
  file: GistFile;
}

interface DeleteGistFileMessage {
  clientID: number;
  action: 'deleteFile';
  file: GistFile;
}

interface ResetGistFilesMessage {
  clientID: number;
  action: 'resetFiles';
  files: GistFile[];
}

type GistFileMessage = WriteGistFileMessage | DeleteGistFileMessage | ResetGistFilesMessage;

