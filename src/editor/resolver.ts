export class Resolver<T> {
  private promise = new Promise<T>(r => this.resolve = r as any);

  public get value() {
    return this.promise;
  }

  public resolve: (editor: T) => void;
}
