/**
 * This file was automatically generated by GraphQL Nexus
 * Do not make changes to this file directly
 */

import * as ctx from "../types"
import * as photon from "@generated/photon"



declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CreateProjectInput: { // input type
    name: string; // String!
    ownerId: string; // String!
  }
  CreateProjectProfileInput: { // input type
    businessUnitId: string; // String!
  }
  CreateProjectProfilesInput: { // input type
    projectId: string; // String!
    projectProfiles: NexusGenInputs['CreateProjectProfileInput'][]; // [CreateProjectProfileInput!]!
  }
  CreateSpendsInput: { // input type
    projectProfileId: string; // String!
    spendAmountsAndDates: NexusGenInputs['SpendAmountAndDateInput'][]; // [SpendAmountAndDateInput!]!
  }
  ProjectWhereUniqueInput: { // input type
    id?: string | null; // ID
    url?: string | null; // String
  }
  SpendAmountAndDateInput: { // input type
    actualSavings?: number | null; // Int
    baselineSpend: number; // Int!
    forecastedSavings: number; // Int!
    month: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenRootTypes {
  BusinessUnit: photon.BusinessUnit;
  Company: photon.Company;
  Mutation: {};
  Project: photon.Project;
  ProjectProfile: photon.ProjectProfile;
  Query: {};
  Spend: photon.Spend;
  User: ctx.User;
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  CreateProjectInput: NexusGenInputs['CreateProjectInput'];
  CreateProjectProfileInput: NexusGenInputs['CreateProjectProfileInput'];
  CreateProjectProfilesInput: NexusGenInputs['CreateProjectProfilesInput'];
  CreateSpendsInput: NexusGenInputs['CreateSpendsInput'];
  ProjectWhereUniqueInput: NexusGenInputs['ProjectWhereUniqueInput'];
  SpendAmountAndDateInput: NexusGenInputs['SpendAmountAndDateInput'];
}

export interface NexusGenFieldTypes {
  BusinessUnit: { // field return type
    company: NexusGenRootTypes['Company']; // Company!
    id: string; // ID!
    name: string; // String!
    projectProfiles: NexusGenRootTypes['ProjectProfile'][]; // [ProjectProfile!]!
  }
  Company: { // field return type
    businessUnits: NexusGenRootTypes['BusinessUnit'][]; // [BusinessUnit!]!
    id: string; // ID!
    name: string; // String!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Mutation: { // field return type
    createProject: NexusGenRootTypes['Project']; // Project!
    createProjectProfiles: NexusGenRootTypes['ProjectProfile'][]; // [ProjectProfile!]!
    createSpends: NexusGenRootTypes['ProjectProfile'][]; // [ProjectProfile!]!
  }
  Project: { // field return type
    company: NexusGenRootTypes['Company']; // Company!
    createdAt: any; // DateTime!
    id: string; // ID!
    name: string; // String!
    owner: NexusGenRootTypes['User']; // User!
    projectProfiles: NexusGenRootTypes['ProjectProfile'][]; // [ProjectProfile!]!
    totalBaselineSpend: number; // Int!
    totalForecastedSavingAmount: number; // Int!
    totalForecastedSavingPercentage: number; // Int!
    url: string; // String!
  }
  ProjectProfile: { // field return type
    businessUnit: NexusGenRootTypes['BusinessUnit']; // BusinessUnit!
    id: string; // ID!
    project: NexusGenRootTypes['Project']; // Project!
    spend: NexusGenRootTypes['Spend'][]; // [Spend!]!
  }
  Query: { // field return type
    project: NexusGenRootTypes['Project'] | null; // Project
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
  }
  Spend: { // field return type
    actualSavings: number | null; // Int
    baselineSpend: number; // Int!
    forecastedSavings: number; // Int!
    id: string; // ID!
    month: any; // DateTime!
    projectProfile: NexusGenRootTypes['ProjectProfile']; // ProjectProfile!
  }
  User: { // field return type
    company: NexusGenRootTypes['Company']; // Company!
    firstName: string; // String!
    fullName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
  }
}

export interface NexusGenArgTypes {
  BusinessUnit: {
    projectProfiles: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Company: {
    businessUnits: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Mutation: {
    createProject: { // args
      input: NexusGenInputs['CreateProjectInput']; // CreateProjectInput!
    }
    createProjectProfiles: { // args
      input: NexusGenInputs['CreateProjectProfilesInput']; // CreateProjectProfilesInput!
    }
    createSpends: { // args
      input: NexusGenInputs['CreateSpendsInput'][]; // [CreateSpendsInput!]!
    }
  }
  Project: {
    projectProfiles: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  ProjectProfile: {
    spend: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Query: {
    project: { // args
      where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
    }
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  User: {
    projects: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BusinessUnit" | "Company" | "Mutation" | "Project" | "ProjectProfile" | "Query" | "Spend" | "User";

export type NexusGenInputNames = "CreateProjectInput" | "CreateProjectProfileInput" | "CreateProjectProfilesInput" | "CreateSpendsInput" | "ProjectWhereUniqueInput" | "SpendAmountAndDateInput";

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: ctx.Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}