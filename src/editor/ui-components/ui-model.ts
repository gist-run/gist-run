export class UIModel {
  public readonly files: UIFile[];
  public readonly currentFile: UIFile;
}

interface UIFile {
  name: string;
  dirty: boolean;
};
