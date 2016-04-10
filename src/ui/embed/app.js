import {inject} from 'aurelia-framework';
import {EditSessionFactory} from '../../editing/edit-session-factory';
import {QueryString} from '../../editing/query-string';
import {Focus} from '../focus';

@inject(EditSessionFactory, QueryString, Focus)
export class App {
  editSession = null;
  showResult = true;

  constructor(editSessionFactory, queryString, focus) {
    this.editSessionFactory = editSessionFactory;
    this.queryString = queryString;
    this.focus = focus;
  }

  _currentItem = null;
  get currentItem() {
    return this._currentItem;
  }
  set currentItem(item) {
    this._currentItem = item;
    if (item === null) {
      this.showResult = true;
    } else {
      this.showResult = false;
      this.editSession.currentFile = item;
      this.focus.set('editor');
    }
  }

  activate() {
    return this.queryString.read()
      .then(gist => {
        this.gist = gist;
        return this.editSessionFactory.create(gist);
      })
      .then(editSession => this.editSession = editSession);
  }

  attached() {
    this.editSession.resetWorker()
      .then(::this.editSession.run);
  }

  reset() {
    this.editSession = this.editSessionFactory.create(this.gist);
    this.attached();
  }
}
