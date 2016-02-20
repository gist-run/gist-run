export class JSFiddleImporter {
  fiddleHtmlToGist(page) {
    let div = document.createElement('div');
    div.innerHTML = /<input id="id_title".*\/>/.exec(page)[0]
    let title = div.firstElementChild.value;
    div.innerHTML = /<textarea id="id_description".*<\/textarea>/.exec(page)[0];
    let description = div.firstElementChild.value;
    div.innerHTML = /<fieldset class="column left">(.|\n)*<\/fieldset>/.exec(page)[0];
    let html = div.querySelector('#id_code_html').value;
    let css = div.querySelector('#id_code_css').value;
    let js = div.querySelector('#id_code_js').value;

    // todo: external resources and frameworks...

    return  {
      description: title + ' - ' + description,
      files: {
        'index.html': {
          type: 'text/html',
          content: `<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <title>GistRun</title>\n  <link rel="stylesheet" href="styles.css">\n</head>\n<body>\n${html}\n  <script src="script.js"></script>\n</body>\n</html>`
        },
        'script.js': {
          type: 'application/javascript',
          content: js
        },
        'styles.css': {
          contentType: 'text/css',
          content: css
        }
      }
    };
  }

  canImport(urlOrId) {
    return /^https:\/\/jsfiddle.net\/[\da-z]+(\/\d+)?\/?$/.test(urlOrId);
  }

  import(urlOrId) {
    return fetch(`https://crossorigin.me/${urlOrId}`)
      .then(response => response.text())
      .then(page => this.fiddleHtmlToGist(page));
  }
}
