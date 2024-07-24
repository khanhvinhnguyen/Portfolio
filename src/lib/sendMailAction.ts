"use server";
import { sendMail } from "@/lib/mail";

export const send = async (formData: FormData) => {
  const data = {
    to: formData.get('email') as string,
    name: formData.get('name') as string,
    subject: formData.get('subject') as string,
    body: `
      <p>Dear ${formData.get('name')},</p>
      <p>Thank you for contacting us. We have received your information and will get back to you as soon as possible.</p>
      <p>Best regards,<br/>Vinh Khanh Nguyen</p>
    `
  };

  await sendMail(data);
};
