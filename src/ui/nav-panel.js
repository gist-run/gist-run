import {bindable} from 'aurelia-framework';
import {getStackOverflowMarkdown} from './stack-overflow-markdown';
import {copyTextToClipboard} from '../util';
import {runUrl} from '../worker/worker-client';

export class NavPanel {
  @bindable editSession;
  runUrl = runUrl;

  copyForStackOverflow() {
    let markdown = getStackOverflowMarkdown(this.editSession);
    copyTextToClipboard(markdown);
  }
}
