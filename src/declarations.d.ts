interface FilesMap { [name: string]: string | null; }

interface Disposable {
  dispose(): void;
}

type WorkerMessage = { session: number; type: 'files'; files: FilesMap; };
