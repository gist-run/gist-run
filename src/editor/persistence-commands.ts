import { Gist, isSaved, SavedGist } from './github/gist';
import { GistPersistence } from './github/gist-persistence';
import { User } from './github/user';

export class PersistenceCommands {
  public commands: {
    execute: () => void;
    title: string;
    analyticsId: string;
    buttonClass: string;
    tooltip: string | null;
  }[];

  constructor(
    private readonly persistence: GistPersistence,
    private readonly user: User,
    public gist: Gist,
    private readonly files: FilesMap
  ) {
    this.updateCommands(gist);
  }

  private updateCommands = (gist: Gist) => {
    if (!isSaved(gist) || !this.user.authenticated) {
      this.commands = [{
        execute: () => this.persistence.create(true, gist.description, this.files).then(this.updateCommands),
        title: 'Create Secret Gist',
        analyticsId: 'create-secret',
        buttonClass: 'btn-secret',
        tooltip: 'Secret gists are hidden from search engines but visible to anyone you give the URL.'
      }, {
        execute: () => this.persistence.create(false, gist.description, this.files).then(this.updateCommands),
        title: 'Create Public Gist',
        analyticsId: 'create-public',
        buttonClass: '',
        tooltip: null
      }];
    } else if (this.user.login === gist.owner.login) {
      this.commands = [{
        execute: () => this.persistence.update(gist as SavedGist, this.files).then(this.updateCommands),
        title: `Update Gist`,
        analyticsId: 'update',
        buttonClass: 'btn-primary',
        tooltip: null
      }, {
        execute: () => this.persistence.create(!gist.public, gist.description, this.files).then(this.updateCommands),
        title: `Fork Gist`,
        analyticsId: 'fork',
        buttonClass: '',
        tooltip: null
      }];
    } else {
      this.commands = [{
        execute: () => this.persistence.create(true, gist.description, this.files).then(this.updateCommands),
        title: `Fork to Secret Gist`,
        analyticsId: 'fork',
        buttonClass: 'btn-secret',
        tooltip: 'Secret gists are hidden from search engines but visible to anyone you give the URL.'
      }, {
        execute: () => this.persistence.fork(gist, this.files).then(this.updateCommands),
        title: `Fork to Public Gist`,
        analyticsId: 'fork',
        buttonClass: '',
        tooltip: null
      }];
    }
  }
}
