export interface IRepo {
  id: number;
  name: string;
  owner: {
    login: string;
  };
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

export interface IModifiedResponse {
  repos: IRepo[];
  end: boolean;
}
