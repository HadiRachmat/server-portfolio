import nodemailer from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  let transpoter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hadirahmat712@gmail.com",
      pass: "@08$uksess01",
    },
  });

  let mailConfig = {
    from: "hadirahmat712@gmail.com",
    to,
    subject,
    text,
  };

  try {
    let info = await transpoter.sendMail(mailConfig);
    console.log("Message sent:" + info.response);
  } catch (error) {
    console.error("Error sending email:" + error);
  }
};

export default sendEmail
