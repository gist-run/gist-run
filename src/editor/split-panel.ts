import { autoinject } from 'aurelia-dependency-injection';
import { DOM } from 'aurelia-pal';

const splitterWidth = 15;
const min = 200;

@autoinject
export class SplitPanel {
  public leftSplitter: HTMLDivElement;
  public rightSplitter: HTMLDivElement;
  public leftPanel: HTMLDivElement;
  public centerPanel: HTMLDivElement;
  public rightPanel: HTMLDivElement;
  private dims: Dimensions;

  constructor(private element: Element) { }

  public bind() {
    this.leftSplitter.addEventListener('mousedown', this.down);
    this.rightSplitter.addEventListener('mousedown', this.down);
    this.leftSplitter.addEventListener('touchstart', this.down);
    this.rightSplitter.addEventListener('touchstart', this.down);
    this.leftSplitter.style.width = `${splitterWidth}px`;
    this.rightSplitter.style.width = `${splitterWidth}px`;
  }

  public unbind() {
    this.leftSplitter.removeEventListener('mousedown', this.down);
    this.rightSplitter.removeEventListener('mousedown', this.down);
    this.leftSplitter.removeEventListener('touchstart', this.down);
    this.rightSplitter.removeEventListener('touchstart', this.down);
    removeEventListener('resize', this.resize);
  }

  public attached() {
    const usable = this.element.getBoundingClientRect().width - 2 * splitterWidth;
    let left = Math.floor(usable * 0.1);
    if (left < min) {
      left = min;
    }
    const right = Math.floor((usable - left) * 0.4);
    const center = usable - left - right;
    this.dims = { left, center, right };
    this.updateDom();
  }

  public down = (downEvent: MouseEvent | TouchEvent) => {
    function clientX(e: MouseEvent | TouchEvent) {
      return e instanceof TouchEvent ? e.targetTouches.item(0).clientX : e.clientX;
    }
    document.body.style.cursor = 'col-resize';

    const splitter: HTMLDivElement = downEvent.target as any;
    const isLeftSplitter = splitter === this.element.firstElementChild.nextElementSibling;
    const offset = clientX(downEvent) - splitter.getBoundingClientRect().left;
    const panel = this.element.getBoundingClientRect();
    let resizeFrame = 0;
    let pointerX: number;

    const layout = () => {
      let { left, center, right } = this.dims;
      if (isLeftSplitter) {
        left = pointerX - offset - panel.left;
      } else {
        right = panel.right - pointerX + offset - splitterWidth;
      }
      center = panel.width - 2 * splitterWidth - left - right;
      if (left < 10 || center < 10 || right < 10) {
        return;
      }
      this.dims = { left, center, right };
      this.updateDom();
    };

    const move = (event: MouseEvent | TouchEvent) => {
      pointerX = clientX(event);
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(layout);
    };

    const moveEvent = downEvent.type === 'mousedown' ? 'mousemove' : 'touchmove';
    const upEvent = downEvent.type === 'mousedown' ? 'mouseup' : 'touchend';

    const up = () => {
      document.body.style.cursor = '';
      document.body.removeEventListener(moveEvent, move);
      document.body.removeEventListener(upEvent, up);
    };

    document.body.addEventListener(moveEvent, move);
    document.body.addEventListener(upEvent, up);
  }

  private updateDom() {
    this.leftPanel.style.width = `${this.dims.left}px`;
    this.centerPanel.style.width = `${this.dims.center}px`;
    this.rightPanel.style.width = `${this.dims.right}px`;

    removeEventListener('resize', this.resize);
    DOM.dispatchEvent(DOM.createCustomEvent('resize', { bubbles: true }));
    addEventListener('resize', this.resize);
  }

  private resize = () => {
    let { left, center, right } = this.dims;
    const current = this.element.getBoundingClientRect().width - 2 * splitterWidth;
    right = current - left - center;
    if (right < 10) {
      right = Math.floor((current - left) / 2);
      center = current - left - right;
    }
    if (left < 10 || center < 10 || right < 10) {
      left = right = Math.floor(current / 3);
      center = current - left - right;
    }
    this.dims = { left, center, right };
    this.updateDom();
  }
}

interface Dimensions {
  left: number;
  center: number;
  right: number;
}
