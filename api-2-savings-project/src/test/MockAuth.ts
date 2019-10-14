import { IAuth } from "../services/Auth/Auth";
import * as admin from "firebase-admin";

class Auth implements IAuth {
  constructor() {}

  async createUser(
    email: string,
    password: string,
    admin: boolean,
    companyId: string
  ): Promise<string> {
    return "MOCK_FIREBASE_UID";
  }

  async verifyIdToken(token: string) {
    const decodedIdToken: admin.auth.DecodedIdToken = {
      aud: "",
      auth_time: 0,
      exp: 0,
      firebase: {
        identities: {},
        sign_in_provider: ""
      },
      iat: 0,
      iss: "",
      sub: "",
      uid: "MOCK_FIREBASE_UID"
    };
    return decodedIdToken;
  }
}

export { Auth };
