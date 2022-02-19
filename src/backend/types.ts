import { Endpoints } from "@octokit/types";

export type User = Endpoints["GET /user"]["response"]["data"];

export type Repo =
  Endpoints["GET /users/{username}/repos"]["response"]["data"][number];
