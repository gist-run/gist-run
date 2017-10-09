import { autoinject } from 'aurelia-framework';
import { QueryString } from '../query-string';
import { EditSessionFactory } from '../edit-session-factory';
import { EditSession } from '../edit-session';
import { Gist } from '../github/gist';
import { defaultGist } from '../default-gist';
import { Importer } from '../import/importer';
import { User } from '../github/user';

@autoinject
export class App {
  private session: EditSession | null = null;
  private runFrame: HTMLIFrameElement;

  constructor(
    private readonly queryString: QueryString,
    private readonly sessionFactory: EditSessionFactory,
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
    if (this.session) {
      this.session.dispose();
      this.session = null;
    }
    this.session = await this.sessionFactory.createFromGist(gist, this.runFrame);
  }
}
