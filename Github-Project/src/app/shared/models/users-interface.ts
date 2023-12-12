export interface User {
    name?: string;
    email?: string;
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    repos?: string[];
    starred_at?: string;
    type: string;
  }
  