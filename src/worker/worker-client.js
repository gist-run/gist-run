import {LogManager} from 'aurelia-framework';
import {postMessageToWorker} from './worker-activator';

const logger = LogManager.getLogger('worker/worker-client');

export const clientID = +new Date();

export class WorkerClient {
  sendMessage(message) {
    message.clientID = clientID;
    logger.debug('sendMessage');
    return new Promise((resolve, reject) => {
      let channel = new MessageChannel();
      channel.port1.onmessage = event => {
        logger.debug('sendMessage response received');
        if (event.data.error) {
          reject(event.data.error);
          return;
        }
        resolve(event.data);
      };
      postMessageToWorker(message, channel.port2);
    });
  }

  updateFile(file) {
    return this.sendMessage({ action: 'updateFile', file });
  }

  deleteFile(file) {
    return this.sendMessage({ action: 'deleteFile', file });
  }

  resetFiles(files) {
    return this.sendMessage({ action: 'resetFiles', files });
  }
}
