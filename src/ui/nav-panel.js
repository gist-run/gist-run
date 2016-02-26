import {bindable} from 'aurelia-framework';
import {getStackOverflowMarkdown} from './stack-overflow-markdown';
import {copyTextToClipboard} from '../util';
import {runUrl} from '../worker/worker-client';
import alertify from 'alertify.js';

const successHtml = `<img class="octicon" style="margin-bottom: -3px" src="img/stack-overflow-icon.png" height="16" width="16"> Stack Overflow markdown copied.`;

export class NavPanel {
  @bindable editSession;
  runUrl = runUrl;

  copyForStackOverflow() {
    let markdown = getStackOverflowMarkdown(this.editSession);
    copyTextToClipboard(markdown);
    alertify.success(successHtml);
  }
}
