import { GistImporter } from './importer';
import { GistPrototype } from '../github/gist';

const urlRegex = /^http(?:s)?:\/\/(?:embed.)?plnkr.co\/(?:edit\/)?([\da-zA-Z]+)/;

export class PlunkerImporter implements GistImporter {
  public canImport(urlOrId: string) {
    return urlRegex.test(urlOrId);
  }

  public import(urlOrId: string) {
    const plunkerID = urlRegex.exec(urlOrId)[1];
    return fetch(`https://api.plnkr.co/plunks/${plunkerID}`)
      .then<any>(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject('Plunk not found.');
        }
        return Promise.reject('Error loading plunk.');
      })
      .then(plunk => {
        const gist: GistPrototype = { description: plunk.description, files: {} };
        for (const name in plunk.files) {
          if (plunk.files.hasOwnProperty(name)) {
            gist.files[name] = {
              filename: name,
              content: plunk.files[name].content
            };
          }
        }
        return gist;
      });
  }
}
