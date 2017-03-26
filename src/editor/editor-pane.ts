import { autoinject } from 'aurelia-framework';
import { EditorResolver } from './editor-resolver';

@autoinject
export class EditorPane {
  public editorContainer: HTMLDivElement;

  private editor: monaco.editor.IStandaloneCodeEditor | null = null;

  constructor(
    private editorResolver: EditorResolver,
    private window: Window,
    private element: Element) { }

  public attached() {
    this.editor = monaco.editor.create(this.element as HTMLElement, { model: null });
    this.window.addEventListener('resize', this.layout);
    this.editorResolver.resolve(this.editor);
  }

  public detached() {
    this.window.removeEventListener('resize', this.layout);
  }

  private layout = () => this.editor.layout();
}
