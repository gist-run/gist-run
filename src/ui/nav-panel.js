import {bindable} from 'aurelia-framework';
import {format} from '../editing/stack-overflow-adapter';
import {copyTextToClipboard} from '../util';
import {runUrl} from '../worker/worker-client';

export class NavPanel {
  @bindable editSession;
  runUrl = runUrl;

  copyForStackOverflow() {
    copyTextToClipboard(format(this.editSession));
  }
}
