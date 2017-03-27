import { SavedGist } from './github/gist';

function getLanguageTag(filename: string) {
  const parts = filename.split('.');
  if (parts.length === 1) {
    return '';
  }
  return `<!--language: lang-${parts[parts.length - 1]} -->\n\n`;
}

function formatFile(filename: string, content: string) {
  const languageTag = getLanguageTag(filename);
  content = content.trim().replace(/^/mg, '    ');
  return `*${filename}*\n\n${languageTag}\n\n${content}`;
}

export function getStackOverflowMarkdown(gist: SavedGist) {
  return `[**Run code snippet**](https://gist.run?id=${gist.id})\n\n`
    + Object.entries(gist.files)
      .map(([filename, { content }]) => formatFile(filename, content))
      .join('\n\n');
}
