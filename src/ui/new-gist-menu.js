import {inject} from 'aurelia-dependency-injection';
import {GistSearch} from '../github/gist-search';

@inject(GistSearch)
export class NewGistMenu {
  constructor(search) {

  }
}
