interface FilesMap { [name: string]: string | null; }

interface WorkerMessage {
  session: number;
  type: 'files';
  files: FilesMap;
}

interface Window {
  define: any;
  monacoLoader: {
    define: any;
    require: any;
  },
  MonacoEnvironment: any;
}
