import {
  CompanyCreateInput,
  BusinessUnitCreateInput,
  ProjectCreateInput,
  UserCreateInput,
  ProjectProfileCreateInput,
  SpendCreateWithoutProjectProfileInput
} from "@generated/photon";
import * as id from "./seedId";

const company = { connect: { id: id.companyId } };

export const apple: CompanyCreateInput = {
  id: id.companyId,
  name: "Apple"
};

export const user: UserCreateInput = {
  id: id.userId1,
  firstName: "John",
  lastName: "Smith",
  company
};

export const businessUnit1: BusinessUnitCreateInput = {
  id: id.businessUnitId1,
  name: "Hardware",
  company
};

export const businessUnit2: BusinessUnitCreateInput = {
  id: id.businessUnitId2,
  name: "Software",
  company
};

export const project1: ProjectCreateInput = {
  id: id.projectId1,
  name: "Tiny Screws",
  url: "tiny-screws",
  owner: { connect: { id: id.userId1 } },
  company
};

const spend1: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId1,
  month: new Date(1600128000000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend2: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId2,
  month: new Date(1602720000000),
  baselineSpend: 60000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend3: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId3,
  month: new Date(1605398400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend4: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId4,
  month: new Date(1607990400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend5: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId5,
  month: new Date(1610668800000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend6: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId6,
  month: new Date(1613347200000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend7: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId7,
  month: new Date(1615766400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend8: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId8,
  month: new Date(1636934400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend9: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId9,
  month: new Date(1639526400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend10: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId10,
  month: new Date(1642204800000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend11: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId11,
  month: new Date(1644883200000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

const spend12: SpendCreateWithoutProjectProfileInput = {
  id: id.spendId12,
  month: new Date(1647302400000),
  baselineSpend: 50000,
  forecastedSavingsAmount: 5000,
  actualSavings: 4500
};

export const projectProfile1: ProjectProfileCreateInput = {
  id: id.projectProfile1,
  businessUnit: { connect: { id: id.businessUnitId1 } },
  project: { connect: { id: id.projectId1 } },
  spend: { create: [spend1, spend2, spend3, spend4, spend5, spend6, spend7] }
};

export const projectProfile2: ProjectProfileCreateInput = {
  id: id.projectProfile2,
  businessUnit: { connect: { id: id.businessUnitId2 } },
  project: { connect: { id: id.projectId1 } },
  spend: { create: [spend8, spend9, spend10, spend11, spend12] }
};

// const user1: User = {
//     email: "nickk2006@gmail.com",
//     password: "password1",
//     uid: s.userId1,
//     admin: true,
//     companyId: s.companyId
//   };
