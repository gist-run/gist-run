import {getContentType} from '../util';
import {getEditorMode} from './editor-mode';

export class File {
  constructor(name, type = getContentType(name), content = '') {
    this.name = name;
    this.originalName = name;
    this.type = type;
    this.content = content;
    this.editorMode = getEditorMode(name);
  }

  rename(name) {
    this.name = name;
    this.type = getContentType(name);
    this.editorMode = getEditorMode(name);
  }

  clone() {
    return {
      name: this.name,
      type: this.type,
      content: this.content
    };
  }
}
