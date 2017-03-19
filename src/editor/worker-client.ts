import { postMessageToWorker } from './worker-activator';
import { workerPage } from './config';

const clientID = +new Date();

export const runUrl = `${workerPage}run/${clientID}/index.html`;

export class WorkerClient {
  public sendMessage(message: GistFileMessage) {
    return new Promise((resolve, reject) => {
      const channel = new MessageChannel();
      channel.port1.onmessage = event => {
        if (event.data.error) {
          reject(event.data.error);
          return;
        }
        resolve(event.data);
      };
      postMessageToWorker(message, channel.port2);
    });
  }

  public updateFile(file: GistFile) {
    return this.sendMessage({ clientID, action: 'updateFile', file });
  }

  public deleteFile(file: GistFile) {
    return this.sendMessage({ clientID, action: 'deleteFile', file });
  }

  public resetFiles(files: GistFile[]) {
    return this.sendMessage({ clientID, action: 'resetFiles', files });
  }
}
