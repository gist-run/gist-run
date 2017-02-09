interface GistFile {
  name: string;
  type: string;
  content: string;
}

interface UpdateGistFileMessage {
  clientID: number;
  action: 'updateFile';
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

type GistFileMessage = UpdateGistFileMessage | DeleteGistFileMessage | ResetGistFilesMessage;

