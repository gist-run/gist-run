import { autoinject } from 'aurelia-dependency-injection';
import { Gists, CreateGistBody, UpdateGistBody } from './gists';
import { SavedGist } from './gist';
import { backslash } from '../util';

@autoinject
export class GistPersistence {
  constructor(private readonly gists: Gists) { }

  public create(secret: boolean, description: string, files: FilesMap) {
    const body: CreateGistBody = {
      public: !secret,
      description,
      files: Object.keys(files).reduce(
        (obj, filename) => {
          const content = files[filename];
          if (content !== null) {
            obj[backslash(filename)] = { content };
          }
          return obj;
        },
        {} as any)
    };
    return this.gists.create(body);
  }

  public update(gist: SavedGist, files: FilesMap) {
    const body: UpdateGistBody = {
      description: gist.description,
      files: {}
    };

    for (const filename in files) {
      if (!files.hasOwnProperty(filename) || files[filename] === null) {
        continue;
      }
      body.files[backslash(filename)] = { content: files[filename] };
    }

    for (const filename in gist.files) {
      if (!gist.files.hasOwnProperty(filename) || body.files.hasOwnProperty(filename)) {
        continue;
      }
      body.files[filename] = null;
    }

    return this.gists.update(gist.id, body);
  }

  public fork(gist: SavedGist, files: FilesMap) {
    return this.gists.fork(gist.id).then(gist => this.update(gist, files));
  }
}
