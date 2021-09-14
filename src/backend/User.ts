// * User.ts : User

export interface User {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  public_repos: number;
}

export const DefaultUser = {
  login: "Loading",
  avatar_url: "../assets/logo.png",
  html_url: "#",
  bio: "Loading",
  public_repos: 0,
};
