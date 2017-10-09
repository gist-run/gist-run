import { GistImporter } from './importer';
import { GistPrototype } from '../github/gist';

export class CodePenImporter implements GistImporter {
  public canImport(urlOrId: string) {
    return /^https:\/\/codepen.io/.test(urlOrId);
  }

  public import(urlOrId: string) {
    return fetch(`https://crossorigin.me/${urlOrId}`)
      .then<string>(response => {
        if (response.ok) {
          return response.text();
        }
        if (response.status === 404) {
          return Promise.reject('CodePen not found.');
        }
        return Promise.reject('Error loading CodePen.');
      })
      .then(page => this.penHtmlToGist(page));
  }

  private penHtmlToGist(page: string): GistPrototype {
    const div = document.createElement('div');
    div.innerHTML = /<input type="hidden" id="init-data" value=".*">/.exec(page)[0];
    const initData = (div.firstElementChild as HTMLInputElement).value;
    const pen = JSON.parse(JSON.parse(initData).__item);

    return {
      description: pen.title,
      files: {
        'index.html': {
          filename: 'index.html',
          // tslint:disable-next-line:max-line-length
          content: `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n${pen.html}\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        'script.js': {
          filename: 'script.js',
          content: pen.js
        },
        'styles.css': {
          filename: 'styles.css',
          content: pen.css
        }
      }
    };
  }
}
