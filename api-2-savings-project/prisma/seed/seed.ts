import * as d from "./seedData";
import { Photon } from "@generated/photon";

import * as seedId from "./seedId";

export { seedId };

const p = new Photon({ debug: false });

const main = async (): Promise<void> => {
  await p.companies.create({ data: d.apple });

  await p.users.create({ data: d.user });

  await p.businessUnits.create({ data: d.businessUnit1 });
  await p.businessUnits.create({ data: d.businessUnit2 });

  await p.projects.create({ data: d.project1 });

  await p.projectProfiles.create({ data: d.projectProfile1 });
  await p.projectProfiles.create({ data: d.projectProfile2 });
};

main()
  .then(() => {
    console.log("DONE");
    process.exit(0);
  })
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await p.disconnect();
  });
