import {computedFrom} from 'aurelia-framework';
import {RunEvent} from './run-event';
import {CurrentFileChangedEvent} from './current-file-changed-event';
import {getEditorMode} from './editor-mode';
import {File} from './file';

export class EditSession {
  constructor(gist, eventAggregator, worker, gistAdapter) {
    this.gist = gist;
    this.eventAggregator = eventAggregator;
    this.worker = worker;
    this.gistAdapter = gistAdapter;
    this.autoRun = true;
    this.files = gistAdapter.filesMapToArray(gist.files);
    this._currentFile = this.files[0];
  }

  _currentFile = null;
  @computedFrom('_currentFile')
  get currentFile() {
    return this._currentFile;
  }
  set currentFile(file) {
    this._currentFile = file;
    this.eventAggregator.publish(new CurrentFileChangedEvent(file));
  }

  run() {
    if (this.autoRun) {
      this.eventAggregator.publish(new RunEvent());
    }
  }

  toggleAutoRun() {
    this.autoRun = !this.autoRun;
    if (this.autoRun) {
      this.run();
    }
  }

  addFile(name) {
    let file = new File(name);
    this.files.push(file);
    this.currentFile = file;
    this.worker.updateFile(file.clone())
      .then(::this.run);
  }

  deleteFile(file) {
    if (this.currentFile === file) {
      this.currentFile = this.files[0];
    }
    this.files.splice(this.files.indexOf(file), 1);
    this.worker.deleteFile(file.clone())
      .then(::this.run);
  }

  renameFile(file, name) {
    this.worker.deleteFile(file.clone())
      .then(() => file.rename(name))
      .then(() => this.worker.updateFile(file.clone()))
      .then(::this.run);
  }

  updateFile(file, content) {
    if (file.content === content) {
      return;
    }
    file.content = content;
    this.worker.updateFile(file.clone())
      .then(::this.run);
  }

  get description() {
    return this.gist.description;
  }
  set description(newValue) {
    this.gist.description = newValue;
  }

  resetWorker() {
    return this.worker.resetFiles(this.files.map(f => f.clone()))
      .then(::this.run);
  }

  get saveAction() {
    return this.gistAdapter.getSaveAction(this.gist, false);
  }

  save(forceFork, secret) {
    let selected = this.currentFile.name;
    return this.gistAdapter.save(this.gist, this.files, forceFork, secret)
      .then(gist => {
        this.gist = gist;
        this.files = this.gistAdapter.filesMapToArray(gist.files);
        return this.resetWorker();
      })
      .then(() => this.currentFile = this.files.find(f => f.name === selected) || this.files[0]);
  }
}
