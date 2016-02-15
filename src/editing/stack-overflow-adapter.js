import {getExtension} from '../util';

function indentCode(code) {
  return code.replace(/^/mg, '    ');
}

export function format(editSession) {
  return `[**Here's an example using GistRun**](https://gist.run?id=${editSession.gist.id}).\n\n`
    + editSession.files.map(file => `**${file.name}**\n<!-- language: lang-${getExtension(file.name)} -->\n\n${indentCode(file.content.trim())}`).join('\n\n');
}
