import { MailDataInternal } from "../services/Email/Email";
import { EmailTemplates as E } from "../services/Email/dynamicTemplateTypes";

// class MockEmail implements IEmail {
class Email {
  constructor() {}

  sendDecisionMakerApprovalRequest(
    data: MailDataInternal<E.DecisionMakerApprovalRequest>
  ) {
    // this.test();
    console.log(data);
    // this.test.callCount
    return true;
  }
}

export { Email };
