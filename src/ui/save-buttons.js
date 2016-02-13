import {containerless, bindable} from 'aurelia-framework';

@containerless()
export class SaveButtons {
  @bindable save;
  @bindable public;
  @bindable saveAction;
}
