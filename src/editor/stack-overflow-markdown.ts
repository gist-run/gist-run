import { getExtension } from './util';
import { Gist } from './github/gist';

function formatFile(filename: string, content: string) {
  const extension = getExtension(filename);
  content = content.trim().replace(/^/mg, '    ');
  return `*${filename}*\n\n<!-- language: lang-${extension} -->\n\n${content}`;
}

export function getStackOverflowMarkdown(gist: Gist) {
  return `[**Run code snippet**](https://gist.run?id=${gist.id})\n\n`
    + Object.entries(gist.files)
      .map(([filename, { content }]) => formatFile(filename, content))
      .join('\n\n');
}
