import { filesMapToGistFiles } from './github/gist';

const defaultIndexHtml =
  `<!doctype html>\n<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>GistRun</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello world!</h1>
    <script src="script.js"></script>
  </body>
</html>
`;

const defaultFiles: FilesMap = {
  'index.html': defaultIndexHtml,
  'script.js': 'console.log(\'Hello World!\');\n',
  'styles.css': '/* todo: add styles */\n',
};

export const defaultGist = {
  description: '',
  files: filesMapToGistFiles(defaultFiles)
};
