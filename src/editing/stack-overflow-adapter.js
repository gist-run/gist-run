import {getExtension} from '../util';

function indentCode(code) {
  return code.replace(/^/mg, '    ');
}

function formatFile(file) {
  const name = file.name;
  const extension = getExtension(name);
  const content = indentCode(file.content.trim());
  return `**${name}**\n\n<!-- language: lang-${extension} -->\n\n${content}`;
}

export function format(editSession) {
  return `[**Here's an example:**](https://gist.run?id=${editSession.gist.id})\n\n`
    + editSession.files.map(file => formatFile(file)).join('\n\n');
}
