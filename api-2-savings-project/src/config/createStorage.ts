import { Storage } from "@google-cloud/storage";
import { keys } from ".";

const createStorage = (): Storage =>
  new Storage({
    projectId: keys.google.projectId,
    credentials: {
      client_email: keys.google.clientEmail, // eslint-disable-line @typescript-eslint/camelcase
      private_key: keys.google.privateKey // eslint-disable-line @typescript-eslint/camelcase
    }
  });

export { createStorage };
