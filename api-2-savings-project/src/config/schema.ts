import { nexusPrismaPlugin } from "nexus-prisma";
import { makeSchema } from "nexus";
import { resolvers } from "../resolvers";
import { join } from "path";

const allTypes = [resolvers];

const nexusPrisma = nexusPrismaPlugin({
  types: allTypes
});

const schema = makeSchema({
  types: [resolvers, nexusPrisma],
  outputs: {
    typegen: join(__dirname, "../generated/nexus-typegen.ts"),
    schema: join(__dirname, "../generated/schema.graphql")
  },
  typegenAutoConfig: {
    sources: [
      {
        source: "@generated/photon",
        alias: "photon"
      },
      {
        source: join(__dirname, "../types.ts"),
        alias: "ctx"
      }
    ],
    contextType: "ctx.Context"
  }
});

export { schema };
