import { postMessageToWorker } from './worker-activator';

export class WorkerClient {
  public sendMessage(message: FilesMessage) {
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
}
