import { Context, User } from "../types";
import * as id from "../../prisma/seed/seedId";

const getUser = async (
  resolve: any, // eslint-disable-line
  root: any, // eslint-disable-line
  args: any, // eslint-disable-line
  ctx: Context,
  info: any // eslint-disable-line
): Promise<Context> => {
  try {
    const authHeader = ctx.request.headers.authorization;

    let user: User | undefined = undefined;
    console.log(authHeader);
    if (authHeader) {
      const token = authHeader.split(" ")[1];

      user = (await ctx.auth.verifyIdToken(token)) as User;
    } else if (process.env.NODE_ENV !== "production") {
      user = {
        aud: "",
        auth_time: 0, //eslint-disable-line
        firebase: { identities: {}, sign_in_provider: "" }, //eslint-disable-line
        iat: 0,
        exp: 0,
        iss: "",
        sub: "",
        uid: id.userId1,
        companyId: id.companyId
      };
    }

    return resolve(root, args, { ...ctx, user }, info);
  } catch (e) {
    console.error("ERROR IN getUser function", e);
    return resolve(root, args, { ...ctx, user: undefined }, info);
  }
};

export { getUser };
