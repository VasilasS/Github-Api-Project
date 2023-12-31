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
  subscriptions_url?: string;
  organizations_url?: string;
  repo_url?: string;
  events_url?: string;
  received_events_url: string;
  site_admin: boolean;
  type: string;
}
