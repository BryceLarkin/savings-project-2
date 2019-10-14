import * as sgMail from "@sendgrid/mail";
import { MailData as $MailData } from "@sendgrid/helpers/classes/mail";
import {
  EmailTemplates as E,
  TemplateData,
  From
} from "./dynamicTemplateTypes";

export interface MailDataInternal<T extends E>
  extends Exclude<{ templateId?: string; from?: string }, $MailData> {
  dynamicTemplateData: TemplateData<T>;
  to: string;
}

interface MailData<T extends E> extends MailDataInternal<T> {
  templateId: T;
  from: From;
}

export interface IEmail {
  sendDecisionMakerApprovalRequest(
    data: MailDataInternal<E.DecisionMakerApprovalRequest>
  ): Promise<boolean>;
}

class Email implements IEmail {
  constructor(apiKey: string) {
    sgMail.setApiKey(apiKey);
  }

  private async send<T extends E>(data: MailData<T>): Promise<boolean> {
    try {
      await sgMail.send(data);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  async sendDecisionMakerApprovalRequest({
    dynamicTemplateData,
    to
  }: MailDataInternal<E.DecisionMakerApprovalRequest>): Promise<boolean> {
    const mailData: MailData<E.DecisionMakerApprovalRequest> = {
      dynamicTemplateData,
      to,
      from: From.Default,
      templateId: E.DecisionMakerApprovalRequest
    };
    const res = await this.send(mailData);
    return res;
  }
}

export { Email };
