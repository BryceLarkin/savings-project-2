export const HOME = "/";

export const PROJECTS = "/projects";
export const PROJECT = "/projects/:projectId";
export const PROJECT_FN = (projectId: string) => `/projects/${projectId}`;

export const USER = "/users/:userId";
export const USER_FN = (userId: string) => `/users/${userId}`;
