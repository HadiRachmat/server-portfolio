import express from "express";
import cors from "cors";
import { sendEmail } from "./service/emailService.js";

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

app.post("/", async (req, res) => {
  const { to, subject, text } = req.body;
  try {
    await sendEmail(to, subject, text);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    res.status(500).send("sending email is failed")
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
