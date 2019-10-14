require("dotenv").config();
import {
  schema,
  validateEnvVars,
  createFirebase,
  createStorage,
  keys
} from "./config";
import { Auth, Storage, Email } from "./services";
import { getUser, permissions } from "./middlewares";
import { GraphQLServer } from "graphql-yoga";
import { Photon } from "@generated/photon";
import { ContextBeforeMiddleware } from "./types";

const photon = new Photon({ debug: false });

const main = async (): Promise<void> => {
  validateEnvVars(process.env);

  //   const PORT = keys.server.port;
  const port = 4000;

  // const origin = keys.server.origin;

  const firebase = createFirebase();
  const auth = new Auth(firebase);

  const gcStorage = createStorage();
  const storage = new Storage(gcStorage);

  const email = new Email(keys.sendGrid.apiKey);

  const server = new GraphQLServer({
    schema,
    context: (req): ContextBeforeMiddleware => ({
      ...req,
      photon,
      auth,
      storage,
      email
    }),
    // to add graphql-shield, see https://github.com/maticzav/graphql-shield/issues/361
    middlewares: [getUser, permissions]
  });

  server.start(
    {
      port,
      debug: true
      //   cors: {
      //     origin
      //   }
    },
    () => console.log(`🚀 Server ready at http://localhost:${port}`)
  );
};

main().catch(async e => {
  console.error(e);
  await photon.disconnect();
  process.exit(1);
});
