import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body?: string;
}) {
  const { EMAIL, PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: EMAIL,
      to,
      subject,
      html: body,
    });
    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}