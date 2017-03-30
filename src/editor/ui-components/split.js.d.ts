declare module 'Split' {
  interface SplitApi {
    setSizes(sizes: number[]): void;
    getSizes(): number[];
    collapse(index: number): void;
    destroy(): void;
  }

  interface SplitOptions {
    sizes?: number | number[];
    minSize?: number | number[];
    gutterSize?: number;
    snapOffset?: number;
    direction?: 'vertical' | 'horizontal';
    cursor?: typeof document.body.style.cursor;
    elementStyle?: (dimension: 'width' | 'height', elementSize: number, gutterSize: number) => object;
    gutterStyle?: (dimension: 'width' | 'height', gutterSize: number) => object;
    onDrag?: () => void;
    onDragStart?: () => void;
    onDragEnd?: () => void;
  }

  function Split(elements: (HTMLElement | string)[], options: SplitOptions): SplitApi;

  export = Split;

  namespace Split { }
}
