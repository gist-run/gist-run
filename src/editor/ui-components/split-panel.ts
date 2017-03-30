import { autoinject } from 'aurelia-dependency-injection';
import * as Split from 'Split';
import { DOM } from 'aurelia-pal';

@autoinject
export class SplitPanel {
  public leftPanel: HTMLDivElement;
  public centerPanel: HTMLDivElement;
  public rightPanel: HTMLDivElement;
  private split: any;

  constructor(private readonly element: Element) { }

  public attached() {
    const width = this.element.getBoundingClientRect().width;
    this.split = Split(
      [this.leftPanel, this.centerPanel, this.rightPanel],
      {
        direction: 'horizontal',
        gutterSize: 15,
        sizes: width < 1800 ? [20, 45, 35] : [10, 50, 40],
        minSize: 50,
        snapOffset: 0,
        onDrag: () => this.element.dispatchEvent(DOM.createCustomEvent('resize', { bubbles: true }))
      });
  }

  public detached() {
    this.split.destroy();
  }
}
