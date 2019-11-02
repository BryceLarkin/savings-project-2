/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ReportDataType {
  ActualSavings = "ActualSavings",
  BaselineSpend = "BaselineSpend",
  ForecastedSavingsAmount = "ForecastedSavingsAmount",
  ForecastedSavingsPercentage = "ForecastedSavingsPercentage",
}

export interface BusinessUnitFilter {
  every?: BusinessUnitWhereInput | null;
  some?: BusinessUnitWhereInput | null;
  none?: BusinessUnitWhereInput | null;
}

export interface BusinessUnitWhereInput {
  id?: StringFilter | null;
  name?: StringFilter | null;
  projectProfiles?: ProjectProfileFilter | null;
  AND?: BusinessUnitWhereInput[] | null;
  OR?: BusinessUnitWhereInput[] | null;
  NOT?: BusinessUnitWhereInput[] | null;
  company?: CompanyWhereInput | null;
}

export interface CompanyWhereInput {
  id?: StringFilter | null;
  name?: StringFilter | null;
  users?: UserFilter | null;
  projects?: ProjectFilter | null;
  businessUnits?: BusinessUnitFilter | null;
  AND?: CompanyWhereInput[] | null;
  OR?: CompanyWhereInput[] | null;
  NOT?: CompanyWhereInput[] | null;
}

export interface CreateProjectInput {
  name: string;
  ownerId: string;
}

export interface CreateProjectProfileInput {
  businessUnitId: string;
}

export interface CreateProjectProfilesInput {
  projectUrl: string;
  projectProfiles: CreateProjectProfileInput[];
}

export interface CreateSpendsInput {
  projectProfileId: string;
  spendAmountsAndDates: SpendAmountAndDateInput[];
}

export interface DateTimeFilter {
  equals?: any | null;
  not?: any | null;
  in?: any[] | null;
  notIn?: any[] | null;
  lt?: any | null;
  lte?: any | null;
  gt?: any | null;
  gte?: any | null;
}

export interface IntFilter {
  equals?: number | null;
  not?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
}

export interface NullableIntFilter {
  equals?: number | null;
  not?: number | null;
  in?: number[] | null;
  notIn?: number[] | null;
  lt?: number | null;
  lte?: number | null;
  gt?: number | null;
  gte?: number | null;
}

export interface ProjectFilter {
  every?: ProjectWhereInput | null;
  some?: ProjectWhereInput | null;
  none?: ProjectWhereInput | null;
}

export interface ProjectProfileFilter {
  every?: ProjectProfileWhereInput | null;
  some?: ProjectProfileWhereInput | null;
  none?: ProjectProfileWhereInput | null;
}

export interface ProjectProfileUpdateInput {
  spend?: SpendUpdateManyWithoutProjectProfileInput | null;
}

export interface ProjectProfileWhereInput {
  id?: StringFilter | null;
  spend?: SpendFilter | null;
  AND?: ProjectProfileWhereInput[] | null;
  OR?: ProjectProfileWhereInput[] | null;
  NOT?: ProjectProfileWhereInput[] | null;
  businessUnit?: BusinessUnitWhereInput | null;
  project?: ProjectWhereInput | null;
}

export interface ProjectProfileWhereUniqueInput {
  id: string;
}

export interface ProjectWhereInput {
  id?: StringFilter | null;
  name?: StringFilter | null;
  url?: StringFilter | null;
  projectProfiles?: ProjectProfileFilter | null;
  createdAt?: DateTimeFilter | null;
  AND?: ProjectWhereInput[] | null;
  OR?: ProjectWhereInput[] | null;
  NOT?: ProjectWhereInput[] | null;
  owner?: UserWhereInput | null;
  company?: CompanyWhereInput | null;
}

export interface ProjectWhereUniqueInput {
  id?: string | null;
  url?: string | null;
}

export interface QueryProjectProfilesWhereInput {
  project?: ProjectWhereInput | null;
}

export interface ReportDataTableInput {
  startPeriod: string;
  endPeriod: string;
  projectIds: string[];
  businessUnitIds: string[];
  dataType: ReportDataType;
}

export interface SpendAmountAndDateInput {
  month: string;
  baselineSpend: number;
  forecastedSavings: number;
  actualSavings?: number | null;
}

export interface SpendFilter {
  every?: SpendWhereInput | null;
  some?: SpendWhereInput | null;
  none?: SpendWhereInput | null;
}

export interface SpendUpdateManyWithoutProjectProfileInput {
  update: SpendUpdateWithWhereUniqueWithoutProjectProfileInput[];
}

export interface SpendUpdateWithWhereUniqueWithoutProjectProfileInput {
  where: SpendWhereUniqueInput;
  data: SpendUpdateWithoutProjectProfileDataInput;
}

export interface SpendUpdateWithoutProjectProfileDataInput {
  baselineSpend?: number | null;
  forecastedSavingsAmount?: number | null;
  actualSavings?: number | null;
}

export interface SpendWhereInput {
  id?: StringFilter | null;
  month?: DateTimeFilter | null;
  baselineSpend?: IntFilter | null;
  forecastedSavingsAmount?: IntFilter | null;
  actualSavings?: NullableIntFilter | null;
  AND?: SpendWhereInput[] | null;
  OR?: SpendWhereInput[] | null;
  NOT?: SpendWhereInput[] | null;
  projectProfile?: ProjectProfileWhereInput | null;
}

export interface SpendWhereUniqueInput {
  id: string;
}

export interface StringFilter {
  equals?: string | null;
  not?: string | null;
  in?: string[] | null;
  notIn?: string[] | null;
  lt?: string | null;
  lte?: string | null;
  gt?: string | null;
  gte?: string | null;
  contains?: string | null;
  startsWith?: string | null;
  endsWith?: string | null;
}

export interface UserFilter {
  every?: UserWhereInput | null;
  some?: UserWhereInput | null;
  none?: UserWhereInput | null;
}

export interface UserWhereInput {
  id?: StringFilter | null;
  firstName?: StringFilter | null;
  lastName?: StringFilter | null;
  projects?: ProjectFilter | null;
  AND?: UserWhereInput[] | null;
  OR?: UserWhereInput[] | null;
  NOT?: UserWhereInput[] | null;
  company?: CompanyWhereInput | null;
}

export interface UserWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
