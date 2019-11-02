import * as faker from "faker";
import * as shortid from "shortid";
import * as id from "./seedId";
import * as _ from "lodash";
import {
  SpendCreateWithoutProjectProfileInput,
  Photon
} from "@generated/photon";

const photon = new Photon({ debug: false });

const getMonth = (): Date =>
  faker.date.between(new Date(1577849148000), new Date(1641007548000));

const createSpend = (): SpendCreateWithoutProjectProfileInput => {
  const baselineSpend = faker.random.number(1000000);
  const forecastedSavingsAmount = faker.random.number({
    min: 0,
    max: baselineSpend * 0.75
  });

  const actualSavings = faker.random.number({ min: 0, max: baselineSpend });
  return {
    month: getMonth(),
    baselineSpend,
    forecastedSavingsAmount,
    actualSavings
  };
};

const nameList = [
  "CPU",
  "CPU Cooler",
  "Microsoft Project Professional 2019",
  "Corsair Vengeance LPX 16 GB",
  "Samsung 860 Evo",
  "Microsoft Office Home & Student 2019",
  "Laplink SafeErase 8 (64-bit)",
  "Cyberlink PowerDVD 15 Ultra",
  "Acronis True Image 2019",
  "AOC C24G1",
  "HP OMEN X Emperium 65",
  "Sceptre E255B-1658A",
  "Buslink CipherShield",
  "Seagate Backup Plus",
  "Apricom ASSD-3PL256-120F",
  "Seagate Backup Plus Slim",
  "LG WH14NS40",
  "Asus DRW-24F1ST",
  "LG GH24NSD1"
];

const createProject = async (): Promise<void> => {
  const project = await photon.projects.create({
    data: {
      name: faker.random.arrayElement(nameList),
      url: shortid.generate(),
      owner: { connect: { id: id.userId1 } },
      company: { connect: { id: id.companyId } }
    }
  });

  const buId = [id.businessUnitId1, id.businessUnitId2, id.businessUnitId3];

  const shuffledBuId = _.shuffle(buId);

  const bu1 = shuffledBuId[0];
  const bu2 = shuffledBuId[1];

  const projectProfile1Promise = photon.projectProfiles.create({
    data: {
      businessUnit: { connect: { id: bu1 } },
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
      businessUnit: { connect: { id: bu2 } },
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

const main = async (): Promise<void> => {
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
