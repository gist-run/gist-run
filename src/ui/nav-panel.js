import {bindable} from 'aurelia-framework';
import {format} from '../editing/stack-overflow-adapter';
import {copyTextToClipboard} from '../util';

export class NavPanel {
  @bindable editSession;

  copyForStackOverflow() {
    copyTextToClipboard(format(this.editSession));
  }
}
