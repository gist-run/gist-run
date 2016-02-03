import {Split} from 'split.js';
import {inject, containerless} from 'aurelia-framework';
import {DOM} from 'aurelia-pal';

@inject(Element)
export class SplitPanel {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let panels = Array.prototype.slice.call(this.element.querySelectorAll('.split'));

    // https://github.com/nathancahill/Split.js/blob/master/README.md#documentation
    Split(panels, {
      sizes: [10, 50, 40],
      gutterSize: 15,
      minSize: 200,
      snapOffset: 1,
      onDrag: () => {
        let event = DOM.createCustomEvent('resize', { bubbles: true });
        this.element.dispatchEvent(event);
      }
    });

    // hack for chrome/splitter.js bug
    panels[2].style.cssText = panels[2].style.cssText.replace('2px', '6px');
  }
}
