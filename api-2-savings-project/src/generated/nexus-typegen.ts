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
  BusinessUnitFilter: { // input type
    every?: NexusGenInputs['BusinessUnitWhereInput'] | null; // BusinessUnitWhereInput
    none?: NexusGenInputs['BusinessUnitWhereInput'] | null; // BusinessUnitWhereInput
    some?: NexusGenInputs['BusinessUnitWhereInput'] | null; // BusinessUnitWhereInput
  }
  BusinessUnitWhereInput: { // input type
    AND?: NexusGenInputs['BusinessUnitWhereInput'][] | null; // [BusinessUnitWhereInput!]
    company?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['BusinessUnitWhereInput'][] | null; // [BusinessUnitWhereInput!]
    OR?: NexusGenInputs['BusinessUnitWhereInput'][] | null; // [BusinessUnitWhereInput!]
    projectProfiles?: NexusGenInputs['ProjectProfileFilter'] | null; // ProjectProfileFilter
  }
  CompanyWhereInput: { // input type
    AND?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    businessUnits?: NexusGenInputs['BusinessUnitFilter'] | null; // BusinessUnitFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    OR?: NexusGenInputs['CompanyWhereInput'][] | null; // [CompanyWhereInput!]
    projects?: NexusGenInputs['ProjectFilter'] | null; // ProjectFilter
    users?: NexusGenInputs['UserFilter'] | null; // UserFilter
  }
  CreateProjectInput: { // input type
    name: string; // String!
    ownerId: string; // String!
  }
  CreateProjectProfileInput: { // input type
    businessUnitId: string; // String!
  }
  CreateProjectProfilesInput: { // input type
    projectProfiles: NexusGenInputs['CreateProjectProfileInput'][]; // [CreateProjectProfileInput!]!
    projectUrl: string; // String!
  }
  CreateSpendsInput: { // input type
    projectProfileId: string; // String!
    spendAmountsAndDates: NexusGenInputs['SpendAmountAndDateInput'][]; // [SpendAmountAndDateInput!]!
  }
  DateTimeFilter: { // input type
    equals?: any | null; // DateTime
    gt?: any | null; // DateTime
    gte?: any | null; // DateTime
    in?: any[] | null; // [DateTime!]
    lt?: any | null; // DateTime
    lte?: any | null; // DateTime
    not?: any | null; // DateTime
    notIn?: any[] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  NullableIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: number | null; // Int
    notIn?: number[] | null; // [Int!]
  }
  ProjectFilter: { // input type
    every?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    none?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    some?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
  }
  ProjectProfileFilter: { // input type
    every?: NexusGenInputs['ProjectProfileWhereInput'] | null; // ProjectProfileWhereInput
    none?: NexusGenInputs['ProjectProfileWhereInput'] | null; // ProjectProfileWhereInput
    some?: NexusGenInputs['ProjectProfileWhereInput'] | null; // ProjectProfileWhereInput
  }
  ProjectProfileSpendOrderByInput: { // input type
    month?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  ProjectProfileWhereInput: { // input type
    AND?: NexusGenInputs['ProjectProfileWhereInput'][] | null; // [ProjectProfileWhereInput!]
    businessUnit?: NexusGenInputs['BusinessUnitWhereInput'] | null; // BusinessUnitWhereInput
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ProjectProfileWhereInput'][] | null; // [ProjectProfileWhereInput!]
    OR?: NexusGenInputs['ProjectProfileWhereInput'][] | null; // [ProjectProfileWhereInput!]
    project?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
    spend?: NexusGenInputs['SpendFilter'] | null; // SpendFilter
  }
  ProjectProjectProfilesWhereInput: { // input type
    businessUnit?: NexusGenInputs['BusinessUnitWhereInput'] | null; // BusinessUnitWhereInput
  }
  ProjectWhereInput: { // input type
    AND?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    company?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    name?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    OR?: NexusGenInputs['ProjectWhereInput'][] | null; // [ProjectWhereInput!]
    owner?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    projectProfiles?: NexusGenInputs['ProjectProfileFilter'] | null; // ProjectProfileFilter
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ProjectWhereUniqueInput: { // input type
    id?: string | null; // ID
    url?: string | null; // String
  }
  QueryBusinessUnitsOrderByInput: { // input type
    name?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  QueryProjectProfilesWhereInput: { // input type
    project?: NexusGenInputs['ProjectWhereInput'] | null; // ProjectWhereInput
  }
  QueryProjectsOrderByInput: { // input type
    name?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  QueryProjectsWhereInput: { // input type
    url?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  ReportDataTableInput: { // input type
    businessUnitIds: string[]; // [String!]!
    dataType: NexusGenEnums['ReportDataType']; // ReportDataType!
    endPeriod: string; // String!
    projectIds: string[]; // [String!]!
    startPeriod: string; // String!
  }
  SpendAmountAndDateInput: { // input type
    actualSavings?: number | null; // Int
    baselineSpend: number; // Int!
    forecastedSavings: number; // Int!
    month: string; // String!
  }
  SpendFilter: { // input type
    every?: NexusGenInputs['SpendWhereInput'] | null; // SpendWhereInput
    none?: NexusGenInputs['SpendWhereInput'] | null; // SpendWhereInput
    some?: NexusGenInputs['SpendWhereInput'] | null; // SpendWhereInput
  }
  SpendWhereInput: { // input type
    actualSavings?: NexusGenInputs['NullableIntFilter'] | null; // NullableIntFilter
    AND?: NexusGenInputs['SpendWhereInput'][] | null; // [SpendWhereInput!]
    baselineSpend?: NexusGenInputs['IntFilter'] | null; // IntFilter
    forecastedSavingsAmount?: NexusGenInputs['IntFilter'] | null; // IntFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    month?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    NOT?: NexusGenInputs['SpendWhereInput'][] | null; // [SpendWhereInput!]
    OR?: NexusGenInputs['SpendWhereInput'][] | null; // [SpendWhereInput!]
    projectProfile?: NexusGenInputs['ProjectProfileWhereInput'] | null; // ProjectProfileWhereInput
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: string | null; // String
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserFilter: { // input type
    every?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    none?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    some?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
  }
  UserProjectsOrderByInput: { // input type
    createdAt?: NexusGenEnums['OrderByArg'] | null; // OrderByArg
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    company?: NexusGenInputs['CompanyWhereInput'] | null; // CompanyWhereInput
    firstName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['StringFilter'] | null; // StringFilter
    lastName?: NexusGenInputs['StringFilter'] | null; // StringFilter
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    projects?: NexusGenInputs['ProjectFilter'] | null; // ProjectFilter
  }
  UserWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  OrderByArg: photon.OrderByArg
  ReportDataType: "ActualSavings" | "BaselineSpend" | "ForecastedSavingsAmount" | "ForecastedSavingsPercentage"
}

export interface NexusGenRootTypes {
  BusinessUnit: photon.BusinessUnit;
  Company: photon.Company;
  Mutation: {};
  Project: photon.Project;
  ProjectProfile: photon.ProjectProfile;
  Query: {};
  ReportTableData: { // root type
    data: NexusGenRootTypes['ReportTableRowData'][]; // [ReportTableRowData!]!
    id: string; // String!
    projectName: string; // String!
    projectUrl: string; // String!
  }
  ReportTableRowData: { // root type
    amount: number; // Int!
    columnId: string; // String!
    columnName: string; // String!
    id: string; // String!
  }
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
  BusinessUnitFilter: NexusGenInputs['BusinessUnitFilter'];
  BusinessUnitWhereInput: NexusGenInputs['BusinessUnitWhereInput'];
  CompanyWhereInput: NexusGenInputs['CompanyWhereInput'];
  CreateProjectInput: NexusGenInputs['CreateProjectInput'];
  CreateProjectProfileInput: NexusGenInputs['CreateProjectProfileInput'];
  CreateProjectProfilesInput: NexusGenInputs['CreateProjectProfilesInput'];
  CreateSpendsInput: NexusGenInputs['CreateSpendsInput'];
  DateTimeFilter: NexusGenInputs['DateTimeFilter'];
  IntFilter: NexusGenInputs['IntFilter'];
  NullableIntFilter: NexusGenInputs['NullableIntFilter'];
  ProjectFilter: NexusGenInputs['ProjectFilter'];
  ProjectProfileFilter: NexusGenInputs['ProjectProfileFilter'];
  ProjectProfileSpendOrderByInput: NexusGenInputs['ProjectProfileSpendOrderByInput'];
  ProjectProfileWhereInput: NexusGenInputs['ProjectProfileWhereInput'];
  ProjectProjectProfilesWhereInput: NexusGenInputs['ProjectProjectProfilesWhereInput'];
  ProjectWhereInput: NexusGenInputs['ProjectWhereInput'];
  ProjectWhereUniqueInput: NexusGenInputs['ProjectWhereUniqueInput'];
  QueryBusinessUnitsOrderByInput: NexusGenInputs['QueryBusinessUnitsOrderByInput'];
  QueryProjectProfilesWhereInput: NexusGenInputs['QueryProjectProfilesWhereInput'];
  QueryProjectsOrderByInput: NexusGenInputs['QueryProjectsOrderByInput'];
  QueryProjectsWhereInput: NexusGenInputs['QueryProjectsWhereInput'];
  ReportDataTableInput: NexusGenInputs['ReportDataTableInput'];
  SpendAmountAndDateInput: NexusGenInputs['SpendAmountAndDateInput'];
  SpendFilter: NexusGenInputs['SpendFilter'];
  SpendWhereInput: NexusGenInputs['SpendWhereInput'];
  StringFilter: NexusGenInputs['StringFilter'];
  UserFilter: NexusGenInputs['UserFilter'];
  UserProjectsOrderByInput: NexusGenInputs['UserProjectsOrderByInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  OrderByArg: NexusGenEnums['OrderByArg'];
  ReportDataType: NexusGenEnums['ReportDataType'];
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
    businessUnits: NexusGenRootTypes['BusinessUnit'][]; // [BusinessUnit!]!
    project: NexusGenRootTypes['Project'] | null; // Project
    projectProfiles: NexusGenRootTypes['ProjectProfile'][]; // [ProjectProfile!]!
    projects: NexusGenRootTypes['Project'][]; // [Project!]!
    reportTableData: NexusGenRootTypes['ReportTableData'][]; // [ReportTableData!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  ReportTableData: { // field return type
    data: NexusGenRootTypes['ReportTableRowData'][]; // [ReportTableRowData!]!
    id: string; // String!
    projectName: string; // String!
    projectUrl: string; // String!
  }
  ReportTableRowData: { // field return type
    amount: number; // Int!
    columnId: string; // String!
    columnName: string; // String!
    id: string; // String!
  }
  Spend: { // field return type
    actualSavings: number | null; // Int
    baselineSpend: number; // Int!
    forecastedSavingsAmount: number; // Int!
    forecastedSavingsPercentage: number; // Int!
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
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  Company: {
    businessUnits: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    projects: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
    users: { // args
      after?: string | null; // ID
      before?: string | null; // ID
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
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
      where?: NexusGenInputs['ProjectProjectProfilesWhereInput'] | null; // ProjectProjectProfilesWhereInput
    }
  }
  ProjectProfile: {
    spend: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['ProjectProfileSpendOrderByInput'] | null; // ProjectProfileSpendOrderByInput
      skip?: number | null; // Int
    }
  }
  Query: {
    businessUnits: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['QueryBusinessUnitsOrderByInput'] | null; // QueryBusinessUnitsOrderByInput
      skip?: number | null; // Int
    }
    project: { // args
      where: NexusGenInputs['ProjectWhereUniqueInput']; // ProjectWhereUniqueInput!
    }
    projectProfiles: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
      where?: NexusGenInputs['QueryProjectProfilesWhereInput'] | null; // QueryProjectProfilesWhereInput
    }
    projects: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['QueryProjectsOrderByInput'] | null; // QueryProjectsOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['QueryProjectsWhereInput'] | null; // QueryProjectsWhereInput
    }
    reportTableData: { // args
      input: NexusGenInputs['ReportDataTableInput']; // ReportDataTableInput!
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      skip?: number | null; // Int
    }
  }
  User: {
    projects: { // args
      after?: string | null; // ID
      before?: string | null; // ID
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserProjectsOrderByInput'] | null; // UserProjectsOrderByInput
      skip?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "BusinessUnit" | "Company" | "Mutation" | "Project" | "ProjectProfile" | "Query" | "ReportTableData" | "ReportTableRowData" | "Spend" | "User";

export type NexusGenInputNames = "BusinessUnitFilter" | "BusinessUnitWhereInput" | "CompanyWhereInput" | "CreateProjectInput" | "CreateProjectProfileInput" | "CreateProjectProfilesInput" | "CreateSpendsInput" | "DateTimeFilter" | "IntFilter" | "NullableIntFilter" | "ProjectFilter" | "ProjectProfileFilter" | "ProjectProfileSpendOrderByInput" | "ProjectProfileWhereInput" | "ProjectProjectProfilesWhereInput" | "ProjectWhereInput" | "ProjectWhereUniqueInput" | "QueryBusinessUnitsOrderByInput" | "QueryProjectProfilesWhereInput" | "QueryProjectsOrderByInput" | "QueryProjectsWhereInput" | "ReportDataTableInput" | "SpendAmountAndDateInput" | "SpendFilter" | "SpendWhereInput" | "StringFilter" | "UserFilter" | "UserProjectsOrderByInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "OrderByArg" | "ReportDataType";

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