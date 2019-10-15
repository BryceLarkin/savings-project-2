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


export type Mutation = {
   __typename?: 'Mutation',
  createProject: Project,
  createProjectProfiles: Array<ProjectProfile>,
  createSpends: Array<Spend>,
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

export type Project = {
   __typename?: 'Project',
  id: Scalars['ID'],
  name: Scalars['String'],
  url: Scalars['String'],
  projectProfiles: Array<ProjectProfile>,
  owner: User,
  company: Company,
  createdAt: Scalars['DateTime'],
};


export type ProjectProjectProfilesArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type ProjectProfile = {
   __typename?: 'ProjectProfile',
  id: Scalars['ID'],
  businessUnit: BusinessUnit,
  project: Project,
  spend: Array<Spend>,
};


export type ProjectProfileSpendArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type Query = {
   __typename?: 'Query',
  projects: Array<Project>,
};


export type QueryProjectsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};

export type Spend = {
   __typename?: 'Spend',
  id: Scalars['ID'],
  month: Scalars['DateTime'],
  baselineSpend: Scalars['Int'],
  forecastedSavings: Scalars['Int'],
  actualSavings?: Maybe<Scalars['Int']>,
  projectProfile: ProjectProfile,
};

export type SpendAmountAndDateInput = {
  month: Scalars['String'],
  baselineSpend: Scalars['Int'],
  forecastedSavings: Scalars['Int'],
  actualSavings?: Maybe<Scalars['Int']>,
};

export type User = {
   __typename?: 'User',
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  projects: Array<Project>,
  company: Company,
};


export type UserProjectsArgs = {
  skip?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  before?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  last?: Maybe<Scalars['Int']>
};
