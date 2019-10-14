import * as admin from "firebase-admin";

export interface IAuth {
  createUser(
    email: string,
    password: string,
    admin: boolean,
    companyId: string
  ): Promise<string>;
  verifyIdToken(token: string): Promise<admin.auth.DecodedIdToken>;
}

class Auth implements IAuth {
  admin: admin.app.App;
  constructor(app: admin.app.App) {
    this.admin = app;
  }

  async createUser(
    email: string,
    password: string,
    admin: boolean,
    companyId: string
  ): Promise<string> {
    const { uid } = await this.admin.auth().createUser({ email, password });

    await this.admin.auth().setCustomUserClaims(uid, { admin, companyId });

    return uid;
  }

  verifyIdToken(token: string) {
    return this.admin.auth().verifyIdToken(token);
  }
}

export { Auth };
