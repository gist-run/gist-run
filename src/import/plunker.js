const urlRegex = /^http:\/\/plnkr.co\/(?:edit\/)?([\da-zA-Z]{6})/;

export class PlunkerImporter {
  canImport(urlOrId) {
    return urlRegex.test(urlOrId);
  }

  import(urlOrId) {
    let plunkerID = urlRegex.exec(urlOrId)[1];
    return fetch(`https://api.plnkr.co/plunks/${plunkerID}`)
      .then(response => response.json())
      .then(plunk => {
        let gist = { description: plunk.description, files: {} };
        for (let name in plunk.files) {
          gist.files[name] = { content: plunk.files[name].content };
        }
        return gist;
      });
  }
}
