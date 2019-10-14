import { Photon } from "@generated/photon";
import * as admin from "firebase-admin";
import { Auth, Storage, Email } from "./services";
import { ContextParameters } from "graphql-yoga/dist/types";

export interface User extends admin.auth.DecodedIdToken {
  companyId: string;
}

// export type User = admin.auth.DecodedIdToken;

export interface Context extends ContextParameters {
  photon: Photon;
  user: User;
  auth: Auth;
  storage: Storage;
  email: Email;
}

export interface ContextBeforeMiddleware extends ContextParameters {
  photon: Photon;
  // user: User;
  auth: Auth;
  storage: Storage;
  email: Email;
}
