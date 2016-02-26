import {inject} from 'aurelia-framework';

@inject(Element)
export class GaCustomAttribute {
  constructor(element) {
    this.element = element;
    this.boundClick = this.click.bind(this);
    this.event = element instanceof HTMLFormElement ? 'submit' : 'click';
  }

  click(event) {
    ga('send', 'event', this.element.getAttribute('ga-category'), this.element.getAttribute('ga-action'));
    return true;
  }

  attached() {
    this.element.addEventListener(this.event, this.boundClick);
  }

  detached() {
    this.element.removeEventListener(this.event, this.boundClick);
  }
}
