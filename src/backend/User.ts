// * User.ts : User

import { UserShort } from "@/backend/Repo";

export interface User extends UserShort {
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string;
  hireable: unknown; // * rlly idk
  bio: string;
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at: string;
}

export const DefaultUser = {
  login: "Loading",
  avatar_url: "../assets/logo.png",
  html_url: "#",
  bio: "Loading",
  public_repos: 0,
} as User;
