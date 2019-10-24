import * as faker from "faker";
import * as shortid from "shortid";
import * as id from "./seedId";
import {
  SpendCreateWithoutProjectProfileInput,
  Photon
} from "@generated/photon";

const photon = new Photon({ debug: false });

const getMonth = () =>
  faker.date.between(new Date(1577849148000), new Date(1641007548000));

const createSpend = (): SpendCreateWithoutProjectProfileInput => {
  const baselineSpend = faker.random.number(1000000);
  const forecastedSavingsAmount = faker.random.number({
    min: 0,
    max: baselineSpend
  });
  const forecastedSavingsPercentage = Math.round(
    (forecastedSavingsAmount / baselineSpend) * 100
  );
  const actualSavings = faker.random.number({ min: 0, max: baselineSpend });
  return {
    month: getMonth(),
    baselineSpend,
    forecastedSavingsAmount,
    forecastedSavingsPercentage,
    actualSavings
  };
};

const createProject = async () => {
  const project = await photon.projects.create({
    data: {
      name: faker.commerce.productName(),
      url: shortid.generate(),
      owner: { connect: { id: id.userId1 } },
      company: { connect: { id: id.companyId } }
    }
  });

  const projectProfile1Promise = photon.projectProfiles.create({
    data: {
      businessUnit: { connect: { id: id.businessUnitId1 } },
      project: { connect: { id: project.id } },
      spend: {
        create: [
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend()
        ]
      }
    }
  });

  const projectProfile2Promise = photon.projectProfiles.create({
    data: {
      businessUnit: { connect: { id: id.businessUnitId2 } },
      project: { connect: { id: project.id } },
      spend: {
        create: [
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend(),
          createSpend()
        ]
      }
    }
  });

  await Promise.all([projectProfile1Promise, projectProfile2Promise]);
};

const main = async () => {
  await createProject();
  await createProject();
  await createProject();
  await createProject();
  await createProject();
  await createProject();
  await createProject();
  await createProject();
  await createProject();
};

main()
  .then(() => {
    console.log("DONE");
  })
  .catch(e => {
    console.error(e);
  })
  .finally(async () => {
    await photon.disconnect();
  });
