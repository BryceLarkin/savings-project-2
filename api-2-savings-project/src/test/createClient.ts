import { Photon } from "@generated/photon";
import { schema, validateEnvVars } from "../config";
import { createTestClient } from "apollo-server-testing";
const { ApolloServer } = require("apollo-server");
import { Storage } from "./MockStorage";
import { Auth } from "./MockAuth";
import { Email } from "./MockEmail";
import { IStorage } from "../services/Storage/Storage";
import { IAuth } from "../services/Auth/Auth";
import { User } from "../types";
import { seedId } from "./seed";
import * as sinon from "sinon";

interface ICreateClient {
  storage?: IStorage;
  auth?: IAuth;
  user?: Partial<User>;
  email?: sinon.SinonStubbedInstance<Email>;
}

const photon = new Photon({ debug: false });

const createClient = (opts?: ICreateClient) => {
  validateEnvVars(process.env);

  const companyId = seedId.companyId;

  let storage = new Storage();
  let auth = new Auth();
  let user: User = {
    admin: true,
    companyId,
    uid: seedId.userId1,
    aud: "",
    auth_time: 0,
    exp: 0,
    firebase: {
      identities: {},
      sign_in_provider: ""
    },
    iat: 0,
    iss: "",
    sub: ""
  };

  const email = sinon.createStubInstance(Email);
  // MockEmail.prototype.sendDecisionMakerApprovalRequest = spyy;

  if (opts) {
    if (opts.auth) {
      auth = opts.auth;
    }
    if (opts.storage) {
      storage = opts.storage;
    }
    if (opts.user) {
      user = { ...user, ...opts.user };
    }
    // if (opts.email) {
    //   email = opts.email;
    // }
  }

  const server = new ApolloServer({
    schema,
    context: (req: any) => ({ ...req, photon, auth, user, storage, email })
  });

  return { ...createTestClient(server), photon, email };
};

export { createClient };
