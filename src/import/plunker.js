const urlRegex = /^http(?:s)?:\/\/(?:embed.)?plnkr.co\/(?:edit\/)?([\da-zA-Z]{6,})/;

export class PlunkerImporter {
  canImport(urlOrId) {
    return urlRegex.test(urlOrId);
  }

  import(urlOrId) {
    let plunkerID = urlRegex.exec(urlOrId)[1];
    return fetch(`https://api.plnkr.co/plunks/${plunkerID}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 404) {
          return Promise.reject('Plunk not found.');
        }
        return Promise.reject('Error loading plunk.');
      })
      .then(plunk => {
        let gist = { description: plunk.description, files: {} };
        for (let name in plunk.files) {
          gist.files[name] = { content: plunk.files[name].content };
        }
        return gist;
      });
  }
}
