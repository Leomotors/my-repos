// * Repo.ts : Repository

export interface UserShort {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  html_url: string;
  type: string;
  site_admin: boolean;
}

export interface Repo {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  private: boolean;
  owner: UserShort;
  html_url: string;
  description: string;
  fork: boolean;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  has_issues: boolean;
  has_projects: boolean;
  has_downloads: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  forks_count: number;
  mirror_url: string;
  archived: boolean;
  disabled: boolean;
  open_issues_count: number;
  license: {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
  };
  allow_forking: boolean;
  forks: number;
  open_issues: number;
  watchers: number;
  default_branch: string;
}
