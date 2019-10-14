require("dotenv").config();
import { schema, validateEnvVars, photon } from "../config";
import { Auth } from "./MockAuth";
import { Storage } from "./MockStorage";
import { getUser, permissions } from "../middlewares";
import { GraphQLServer } from "graphql-yoga";

const main = async () => {
  validateEnvVars(process.env);

  const PORT = process.env.PORT || 4000;

  const auth = new Auth();

  const storage = new Storage();

  const server = new GraphQLServer({
    schema,
    context: req => ({ ...req, photon, auth, storage }),
    // to add graphql-shield, see https://github.com/maticzav/graphql-shield/issues/361
    middlewares: [getUser]
  });

  server.start({ port: PORT, debug: false }, () =>
    console.log(`🚀 Test server ready at http://localhost:${PORT}`)
  );
};

main().catch(e => {
  console.error(e);
  process.exit(1);
});
