import {containerless, bindable} from 'aurelia-framework';
import alertify from 'alertify';

@containerless()
export class SaveButtons {
  @bindable save;
  @bindable public;
  @bindable saveAction;

  saveClick(event, instruction) {
    let message = event.target.textContent;
    this.save(instruction)
      .then(
        () => alertify.success(message + ' succeeded.'),
        () => alertify.error(message + ' failed.'));
  }
}
