import {inject} from 'aurelia-framework';
import {Gists} from '../github/gists';
import {User} from '../github/user';
import {defaultIndexHtml} from '../github/default-gist';
import {File} from './file';

function toFilename(name) {
  return name.replace(/\//g, '\\');
}

function toUrl(name) {
  return name.replace(/\\/g, '/');
}

export const saveAction = {
  fork: 'Fork',
  create: 'Create',
  update: 'Update'
};

@inject(Gists, User)
export class GistAdapter {
  constructor(gists, user) {
    this.gists = gists;
    this.user = user;
  }

  filesMapToArray(filesMap) {
    let files = [];
    for (name in filesMap) {
      let gistFile = filesMap[name];
      let file = new File(toUrl(name), gistFile.type, gistFile.content);
      if (file.name === 'index.html') {
        files.unshift(file);
      } else {
        files.push(file);
      }
    }
    if (files.findIndex(f => f.name === 'index.html')) {
      files.unshift(new File('index.html', 'text/html', defaultIndexHtml));
    }
    return files;
  }

  getCreateFiles(filesArray) {
    let map = {};
    for (let i = 0; i < filesArray.length; i++) {
      let file = filesArray[i];
      let filename = toFilename(file.name);
      map[filename] = { content: file.content };
    }
    return map;
  }

  getUpdateFiles(filesMap, filesArray) {
    let files = filesArray.slice(0);
    let map = {};
    for (name in filesMap) {
      let index = files.findIndex(f => f.originalName === name);
      let filename = toFilename(name);
      if (index === -1) {
        // delete
        map[filename] = null;
      } else {
        // update
        let file = files.splice(index, 1)[0];
        map[filename] = { content: file.content };
        // rename?
        if (file.name !== file.originalName) {
          map[filename].filename = toFilename(file.name);
        }
      }
    }
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      let filename = toFilename(file.name);
      if (map[filename]) {
        // a file was renamed, then a file was added with the renamed file's original name.
        // handle the collision, losing the rename operation.
        map[map[filename].filename] = { content: map[filename].content };
      }
      map[filename] = { content: file.content };
    }
    return map;
  }

  getSaveAction(gist) {
    const existingGist = !!gist.id;
    // existing gist that isn't anonymous? (anonymous gists can't be forked)
    if (this.user.authenticated && existingGist && gist.owner) {
      // user is owner?
      if (gist.owner.login === this.user.login) {
        return saveAction.update;
      } else {
        return saveAction.fork;
      }
    } else {
      return saveAction.create;
    }
  }

  save(gist, filesArray, secret) {
    let files;
    let promise;
    let description = gist.description;
    switch (this.getSaveAction(gist)) {
      case saveAction.update:
        files = this.getUpdateFiles(gist.files, filesArray);
        promise = this.gists.update(gist.id, { description, files });
        break;
      case saveAction.fork:
        promise = this.gists.fork(gist.id)
          .then(gist => {
            files = this.getUpdateFiles(gist.files, filesArray);
            return this.gists.update(gist.id, { public: !secret, description, files });
          });
        break;
      case saveAction.create:
        files = this.getCreateFiles(filesArray);
        promise = this.gists.create({ public: !secret, description, files });
        break;
    }

    return promise.then(gist => {
      history.pushState(null, window.title, '?' + this.gists.toQuery(gist, false));
      return gist;
    });
  }
}
