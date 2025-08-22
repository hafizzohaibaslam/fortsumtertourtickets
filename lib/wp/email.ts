"use server";
import { AxiosError } from "axios";
import WP from "../API";

interface SendEmailParams {
  emailTo?: string;
  subject?: string;
  replyTo?: string;
  htmlContent: string;
}

const sendEmail = async ({
  emailTo,
  subject,
  replyTo,
  htmlContent,
}: SendEmailParams) => {
  try {
    await WP.post("/custom-send-email", {
      email_to: emailTo,
      subject: subject,
      html_content: htmlContent,
      reply_to: replyTo,
    });
    return true;
  } catch (error) {
    if (error instanceof AxiosError) {
      return false;
    }
    return false;
  }
};

export default sendEmail;
