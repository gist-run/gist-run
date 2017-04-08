import { autoinject } from 'aurelia-framework';
import { QueryString } from '../query-string';
import { EditSessionFactory } from '../edit-session-factory';
import { EditSession } from '../edit-session';
import { defaultGist } from '../github/default-gist';
import { Gist } from '../github/gist';
import { Importer } from '../import/importer';
import { User } from '../github/user';

@autoinject
export class App {
  private editSession: EditSession | null = null;
  private runFrame: HTMLIFrameElement;

  constructor(
    private readonly queryString: QueryString,
    private readonly editSessionFactory: EditSessionFactory,
    private readonly importer: Importer,
    public readonly user: User) {
  }

  public async attached() {
    const gist = await this.queryString.read();
    this.createEditSession(gist);
  }

  public newGist() {
    this.createEditSession(defaultGist);
  }

  public async import(urlOrId: string) {
    try {
      const gist = await this.importer.import(urlOrId);
      this.createEditSession(gist);
    } catch (error) {
      console.error(error);
    }
  }

  private async createEditSession(gist: Gist) {
    if (this.editSession) {
      this.editSession.dispose();
      this.editSession = null;
    }
    this.editSession = await this.editSessionFactory.create(gist, this.runFrame);
  }
}
