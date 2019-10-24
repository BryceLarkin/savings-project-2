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

export interface CreateProjectInput {
  name: string;
  ownerId: string;
}

export interface CreateProjectProfileInput {
  businessUnitId: string;
}

export interface CreateProjectProfilesInput {
  projectId: string;
  projectProfiles: CreateProjectProfileInput[];
}

export interface CreateSpendsInput {
  projectProfileId: string;
  spendAmountsAndDates: SpendAmountAndDateInput[];
}

export interface ProjectWhereUniqueInput {
  id?: string | null;
  url?: string | null;
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

export interface UserWhereUniqueInput {
  id?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
