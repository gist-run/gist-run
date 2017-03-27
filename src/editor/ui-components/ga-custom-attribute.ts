import { autoinject } from 'aurelia-dependency-injection';

@autoinject
export class GaCustomAttribute {
  private readonly event: string;

  constructor(private element: Element) {
    this.element = element;
    this.event = element instanceof HTMLFormElement ? 'submit' : 'click';
  }

  public attached() {
    this.element.addEventListener(this.event, this.click);
  }

  public detached() {
    this.element.removeEventListener(this.event, this.click);
  }

  private click = () => {
    ga(
      'send',
      'event',
      this.element.getAttribute('ga-category'),
      this.element.getAttribute('ga-action'));
    return true;
  }
}
