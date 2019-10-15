import { ProjectCreateInput } from "@generated/photon";
import * as shortid from "shortid";
import { seedId } from "../seed";

export const mockProject = (): ProjectCreateInput => ({
  name: shortid.generate(),
  url: shortid.generate(),
  owner: { connect: { id: seedId.userId1 } },
  company: { connect: { id: seedId.companyId } }
});
