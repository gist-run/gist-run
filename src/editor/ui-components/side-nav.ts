import { bindable } from 'aurelia-framework';
import { getStackOverflowMarkdown } from '../stack-overflow-markdown';
import { copyTextToClipboard } from '../util';
import { EditSession } from '../edit-session';

// tslint:disable-next-line:max-line-length
// const successHtml = `<img class="octicon" style="margin-bottom: -3px" src="img/stack-overflow-icon.png" height="16" width="16"> Stack Overflow markdown copied.`;

export class SideNav {
  @bindable public editSession: EditSession;

  public copyForStackOverflow() {
    const markdown = getStackOverflowMarkdown(this.editSession.gist);
    copyTextToClipboard(markdown);
  }
}
