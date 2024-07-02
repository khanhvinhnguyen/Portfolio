"use server";
import { sendMail } from "@/lib/mail";

export const send = async (formData: FormData) => {
  const data = {
    to: "vinhnk.work@gmail.com",
    name: formData.get('name') as string,
    subject: formData.get('subject') as string,
  };

  await sendMail(data);
};
