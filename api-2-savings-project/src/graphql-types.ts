export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  DateTime: any,
};

export type BusinessUnit = {
   __typename?: 'BusinessUnit',
  id: Scalars['ID'],
  name: Scalars['String'],
  projectProfiles: Array<ProjectProfile>,
  company: Company,
};


export type BusinessUnitProjectProfilesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type BusinessUnitFilter = {
  every?: Maybe<BusinessUnitWhereInput>,
  some?: Maybe<BusinessUnitWhereInput>,
  none?: Maybe<BusinessUnitWhereInput>,
};

export type BusinessUnitWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  projectProfiles?: Maybe<ProjectProfileFilter>,
  AND?: Maybe<Array<BusinessUnitWhereInput>>,
  OR?: Maybe<Array<BusinessUnitWhereInput>>,
  NOT?: Maybe<Array<BusinessUnitWhereInput>>,
  company?: Maybe<CompanyWhereInput>,
};

export type Company = {
   __typename?: 'Company',
  id: Scalars['ID'],
  name: Scalars['String'],
  users: Array<User>,
  projects: Array<Project>,
  businessUnits: Array<BusinessUnit>,
};


export type CompanyUsersArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CompanyProjectsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type CompanyBusinessUnitsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type CompanyWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  users?: Maybe<UserFilter>,
  projects?: Maybe<ProjectFilter>,
  businessUnits?: Maybe<BusinessUnitFilter>,
  AND?: Maybe<Array<CompanyWhereInput>>,
  OR?: Maybe<Array<CompanyWhereInput>>,
  NOT?: Maybe<Array<CompanyWhereInput>>,
};

export type CreateProjectInput = {
  name: Scalars['String'],
  ownerId: Scalars['String'],
};

export type CreateProjectProfileInput = {
  businessUnitId: Scalars['String'],
};

export type CreateProjectProfilesInput = {
  projectId: Scalars['String'],
  projectProfiles: Array<CreateProjectProfileInput>,
};

export type CreateSpendsInput = {
  projectProfileId: Scalars['String'],
  spendAmountsAndDates: Array<SpendAmountAndDateInput>,
};


export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>,
  not?: Maybe<Scalars['DateTime']>,
  in?: Maybe<Array<Scalars['DateTime']>>,
  notIn?: Maybe<Array<Scalars['DateTime']>>,
  lt?: Maybe<Scalars['DateTime']>,
  lte?: Maybe<Scalars['DateTime']>,
  gt?: Maybe<Scalars['DateTime']>,
  gte?: Maybe<Scalars['DateTime']>,
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  createProject: Project,
  createProjectProfiles: Array<ProjectProfile>,
  createSpends: Array<ProjectProfile>,
};


export type MutationCreateProjectArgs = {
  input: CreateProjectInput
};


export type MutationCreateProjectProfilesArgs = {
  input: CreateProjectProfilesInput
};


export type MutationCreateSpendsArgs = {
  input: Array<CreateSpendsInput>
};

export type NullableIntFilter = {
  equals?: Maybe<Scalars['Int']>,
  not?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Scalars['Int']>>,
  notIn?: Maybe<Array<Scalars['Int']>>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
};

export enum OrderByArg {
  Asc = 'asc',
  Desc = 'desc'
}

export type Project = {
   __typename?: 'Project',
  id: Scalars['ID'],
  name: Scalars['String'],
  url: Scalars['String'],
  projectProfiles: Array<ProjectProfile>,
  owner: User,
  company: Company,
  createdAt: Scalars['DateTime'],
  totalBaselineSpend: Scalars['Int'],
  totalForecastedSavingAmount: Scalars['Int'],
  totalForecastedSavingPercentage: Scalars['Int'],
};


export type ProjectProjectProfilesArgs = {
  where?: Maybe<ProjectProjectProfilesWhereInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProjectFilter = {
  every?: Maybe<ProjectWhereInput>,
  some?: Maybe<ProjectWhereInput>,
  none?: Maybe<ProjectWhereInput>,
};

export type ProjectProfile = {
   __typename?: 'ProjectProfile',
  id: Scalars['ID'],
  businessUnit: BusinessUnit,
  project: Project,
  spend: Array<Spend>,
};


export type ProjectProfileSpendArgs = {
  orderBy?: Maybe<ProjectProfileSpendOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProjectProfileFilter = {
  every?: Maybe<ProjectProfileWhereInput>,
  some?: Maybe<ProjectProfileWhereInput>,
  none?: Maybe<ProjectProfileWhereInput>,
};

export type ProjectProfileSpendOrderByInput = {
  month?: Maybe<OrderByArg>,
};

export type ProjectProfileWhereInput = {
  id?: Maybe<StringFilter>,
  spend?: Maybe<SpendFilter>,
  AND?: Maybe<Array<ProjectProfileWhereInput>>,
  OR?: Maybe<Array<ProjectProfileWhereInput>>,
  NOT?: Maybe<Array<ProjectProfileWhereInput>>,
  businessUnit?: Maybe<BusinessUnitWhereInput>,
  project?: Maybe<ProjectWhereInput>,
};

export type ProjectProjectProfilesWhereInput = {
  businessUnit?: Maybe<BusinessUnitWhereInput>,
};

export type ProjectWhereInput = {
  id?: Maybe<StringFilter>,
  name?: Maybe<StringFilter>,
  url?: Maybe<StringFilter>,
  projectProfiles?: Maybe<ProjectProfileFilter>,
  createdAt?: Maybe<DateTimeFilter>,
  AND?: Maybe<Array<ProjectWhereInput>>,
  OR?: Maybe<Array<ProjectWhereInput>>,
  NOT?: Maybe<Array<ProjectWhereInput>>,
  owner?: Maybe<UserWhereInput>,
  company?: Maybe<CompanyWhereInput>,
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>,
  url?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  projects: Array<Project>,
  businessunits: Array<BusinessUnit>,
  project?: Maybe<Project>,
  reportTableData: Array<ReportTableData>,
};


export type QueryProjectsArgs = {
  where?: Maybe<QueryProjectsWhereInput>,
  orderBy?: Maybe<QueryProjectsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryBusinessunitsArgs = {
  orderBy?: Maybe<QueryBusinessunitsOrderByInput>,
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};


export type QueryProjectArgs = {
  where: ProjectWhereUniqueInput
};


export type QueryReportTableDataArgs = {
  input: ReportDataTableInput
};

export type QueryBusinessunitsOrderByInput = {
  name?: Maybe<OrderByArg>,
};

export type QueryProjectsOrderByInput = {
  name?: Maybe<OrderByArg>,
};

export type QueryProjectsWhereInput = {
  url?: Maybe<StringFilter>,
};

export type ReportDataTableInput = {
  /** timestamp in milliseconds */
  startPeriod: Scalars['String'],
  /** timestamp in milliseconds */
  endPeriod: Scalars['String'],
  projectIds: Array<Scalars['String']>,
  businessUnitIds: Array<Scalars['String']>,
  dataType: ReportDataType,
};

export enum ReportDataType {
  BaselineSpend = 'BaselineSpend',
  ActualSavings = 'ActualSavings',
  ForecastedSavingsPercentage = 'ForecastedSavingsPercentage',
  ForecastedSavingsAmount = 'ForecastedSavingsAmount'
}

export type ReportTableData = {
   __typename?: 'ReportTableData',
  id: Scalars['String'],
  projectUrl: Scalars['String'],
  projectName: Scalars['String'],
  data: Array<ReportTableRowData>,
};

export type ReportTableRowData = {
   __typename?: 'ReportTableRowData',
  id: Scalars['String'],
  columnName: Scalars['String'],
  columnId: Scalars['String'],
  amount: Scalars['Int'],
};

export type Spend = {
   __typename?: 'Spend',
  id: Scalars['ID'],
  month: Scalars['DateTime'],
  baselineSpend: Scalars['Int'],
  actualSavings?: Maybe<Scalars['Int']>,
  projectProfile: ProjectProfile,
  forecastedSavingsPercentage: Scalars['Int'],
  forecastedSavingsAmount: Scalars['Int'],
};

export type SpendAmountAndDateInput = {
  month: Scalars['String'],
  baselineSpend: Scalars['Int'],
  forecastedSavings: Scalars['Int'],
  actualSavings?: Maybe<Scalars['Int']>,
};

export type SpendFilter = {
  every?: Maybe<SpendWhereInput>,
  some?: Maybe<SpendWhereInput>,
  none?: Maybe<SpendWhereInput>,
};

export type SpendWhereInput = {
  id?: Maybe<StringFilter>,
  month?: Maybe<DateTimeFilter>,
  baselineSpend?: Maybe<IntFilter>,
  forecastedSavingsAmount?: Maybe<IntFilter>,
  forecastedSavingsPercentage?: Maybe<IntFilter>,
  actualSavings?: Maybe<NullableIntFilter>,
  AND?: Maybe<Array<SpendWhereInput>>,
  OR?: Maybe<Array<SpendWhereInput>>,
  NOT?: Maybe<Array<SpendWhereInput>>,
  projectProfile?: Maybe<ProjectProfileWhereInput>,
};

export type StringFilter = {
  equals?: Maybe<Scalars['String']>,
  not?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Scalars['String']>>,
  notIn?: Maybe<Array<Scalars['String']>>,
  lt?: Maybe<Scalars['String']>,
  lte?: Maybe<Scalars['String']>,
  gt?: Maybe<Scalars['String']>,
  gte?: Maybe<Scalars['String']>,
  contains?: Maybe<Scalars['String']>,
  startsWith?: Maybe<Scalars['String']>,
  endsWith?: Maybe<Scalars['String']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  projects: Array<Project>,
  company: Company,
  fullName: Scalars['String'],
};


export type UserProjectsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type UserFilter = {
  every?: Maybe<UserWhereInput>,
  some?: Maybe<UserWhereInput>,
  none?: Maybe<UserWhereInput>,
};

export type UserWhereInput = {
  id?: Maybe<StringFilter>,
  firstName?: Maybe<StringFilter>,
  lastName?: Maybe<StringFilter>,
  projects?: Maybe<ProjectFilter>,
  AND?: Maybe<Array<UserWhereInput>>,
  OR?: Maybe<Array<UserWhereInput>>,
  NOT?: Maybe<Array<UserWhereInput>>,
  company?: Maybe<CompanyWhereInput>,
};
