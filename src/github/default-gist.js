export const defaultGist = {
  description: '',
  files: {
    'index.html': {
      type: 'text/html',
      content: '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n  <h1>Hello world!</h1>\n  <script src="script.js"></script>\n</body>\n</html>'
    },
    'script.js': {
      type: 'application/javascript',
      content: 'console.log(\'Hello World!\');'
    },
    'styles.css': {
      contentType: 'text/css',
      content: '/* todo: add styles */'
    }
  }
}

export const defaultIndexHtml = '<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <!--<link rel="stylesheet" href="styles.css">-->\n</head>\n<body>\n  <h1>Hello world!</h1>\n  <!--<script src="script.js"></script>-->\n</body>\n</html>';
