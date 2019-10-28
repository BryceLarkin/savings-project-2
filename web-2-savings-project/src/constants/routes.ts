export const HOME = "/";

export const PROJECTS = "/projects";
export const NEW = "/new";
export const PROJECT = "/projects/:projectUrl";
export const PROJECT_FN = (projectUrl: string) => `/projects/${projectUrl}`;
export interface PROJECT_PARAMS {
  projectUrl: string;
}
export const PROFILE_FN = (projectUrl: string) =>
  `/projects/${projectUrl}/profiles`;

export const PROFILES = "/projects/:projectUrl/profiles";
export interface PROFILES_PARAMS {
  projectUrl: string;
}

export const USER = "/users/:userId";
export const USER_FN = (userId: string) => `/users/${userId}`;

export const REPORT = "/reports";

export const MY_ACCOUNT = "/my-account";
