import ace from 'ace';
import 'ace/ext-modelist';

const modelist = ace.require('ace/ext/modelist');

export function getEditorMode(name) {
  return modelist.getModeForPath(name).name;
}
