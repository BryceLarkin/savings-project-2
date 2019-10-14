import * as admin from "firebase-admin";
import { keys } from ".";

const createFirebase = () =>
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: keys.firebase.projectId,
      clientEmail: keys.firebase.clientEmail,
      privateKey: keys.firebase.privateKey
    }),
    databaseURL: keys.firebase.databaseUrl
  });

export { createFirebase };
