import { Storage } from "@google-cloud/storage";
import { keys } from ".";

const createStorage = () =>
  new Storage({
    projectId: keys.google.projectId,
    credentials: {
      client_email: keys.google.clientEmail,
      private_key: keys.google.privateKey
    }
  });

export { createStorage };
