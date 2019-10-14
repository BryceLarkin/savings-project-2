export enum EmailTemplates {
  DecisionMakerApprovalRequest = "d-37484ef9f6ab44019a86efb4e2b0c6ba",
  SignUp = "jifajds"
}

export type TemplateData<
  T extends EmailTemplates
> = T extends EmailTemplates.DecisionMakerApprovalRequest
  ? DecisionMakerApprovalRequest
  : T extends EmailTemplates.SignUp
  ? SignUp
  : {};

interface DecisionMakerApprovalRequest {
  approvalLink: string;
}

interface SignUp {}

export enum From {
  Default = "test@test.com"
}
