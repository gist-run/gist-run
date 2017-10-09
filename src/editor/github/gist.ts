export type Gist = SavedGist | GistPrototype;

export function isSaved(gist: Gist): gist is SavedGist {
  return 'id' in gist;
}

export interface SavedGist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: { [filename: string]: GistFile };
  public: boolean;
  created_at: string;
  updated_at: string;
  description: string;
  comments: number;
  user: null;
  comments_url: string;
  owner: User;
  forks: {
    url: string;
    user: User;
    id: string;
    created_at: string;
    updated_at: string;
  }[];
  history: {
    user: User;
    version: string;
    committed_at: string;
    change_status: {
      total: number;
      additions: number;
      deletions: number;
    };
    url: string;
  }[];
  truncated: boolean;
}

export interface GistFile extends GistPrototypeFile {
  type: string;
  language: string;
  raw_url: string;
  size: number;
  truncated: boolean;
}

export interface GistPrototype {
  description: string;
  files: { [filename: string]: GistPrototypeFile };
}

export interface GistPrototypeFile {
  filename: string;
  content: string;
}

export interface User {
  login: string;
  id: number;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export function filesMapToGistFiles(files: FilesMap) {
  return Object.keys(files).reduce<{ [filename: string]: GistPrototypeFile }>(
    (gistFiles, filename) => {
      gistFiles[filename] = {
        filename,
        content: files[filename]
      };
      return gistFiles;
    },
    {});
}
