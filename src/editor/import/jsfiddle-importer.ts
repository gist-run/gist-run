import { GistImporter } from './importer';
import { Gist } from '../github/gists';

export class JSFiddleImporter implements GistImporter {
  public canImport(urlOrId: string) {
    return /^http(?:s)?:\/\/jsfiddle.net(?:\/[^\\]+)/.test(urlOrId);
  }

  public import(urlOrId: string) {
    return fetch(`https://crossorigin.me/${urlOrId}`)
      .then<string>(response => {
        if (response.ok) {
          return response.text();
        }
        if (response.status === 404) {
          return Promise.reject('jsFiddle not found.');
        }
        return Promise.reject('Error loading jsFiddle.');
      })
      .then(page => this.fiddleHtmlToGist(page));
  }

  private fiddleHtmlToGist(page: string): Gist {
    const div = document.createElement('div');
    div.innerHTML = /<input id="id_title".*\/>/.exec(page)[0];
    const title = (div.firstElementChild as HTMLInputElement).value;
    div.innerHTML = /<textarea id="id_description".*<\/textarea>/.exec(page)[0];
    const description = (div.firstElementChild as HTMLTextAreaElement).value;
    div.innerHTML = /<fieldset class="column left">(.|\n)*<\/fieldset>/.exec(page)[0];
    const html = (div.querySelector('#id_code_html') as HTMLTextAreaElement).value;
    const css = (div.querySelector('#id_code_css') as HTMLTextAreaElement).value;
    const js = (div.querySelector('#id_code_js') as HTMLTextAreaElement).value;

    // todo: external resources and frameworks...

    return {
      description: (title + ' - ' + description).replace(/(^ - )|( - )$/, ''),
      files: {
        'index.html': {
          type: 'text/html',
          // tslint:disable-next-line:max-line-length
          content: `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n${html}\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        'script.js': {
          type: 'application/javascript',
          content: js
        },
        'styles.css': {
          type: 'text/css',
          content: css
        }
      }
    };
  }
}
