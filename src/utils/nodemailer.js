import nodemailer from "nodemailer";

async function sendMail(otp, email) {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: { user: 'arjunkrishnaraj5@gmail.com', pass: 'fjnzwjclzpjtwszq' },
    });
    const mailoptions = {
      from: process.env.MAIL,
      to: email,
      subject: "Drive Email Verification OTP",
      text: `verification otp:${otp}`,
    };

    const mailtransfered = await transport.sendMail(mailoptions);
    if (mailtransfered) {
      console.log("mail transfered successfully");
      return
    }
  } catch (err) {
    console.error(err);
    throw err
  }
}

export default sendMail;
