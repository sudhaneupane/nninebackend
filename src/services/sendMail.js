import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateOtp } from "./generateOtp.js";
import OTP from "../models/otp.model.js";

dotenv.config({
  path: "./.env",
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.USER, //sender gmail
    pass: process.env.APP_PASSWORD, //App password from Gmail
  },
});

const sendMail = asyncHandler(async (req, res) => {
  const { email } = req.body;
  console.log(email);

  const otp = generateOtp();

  var mailOptions = {
    from: {
      name: "N9 Solution",
      address: process.env.USER,
    }, // sender address
    to: email,
    subject: "OTP from N9 Solution", // Subject line
    text: `Your OTP is :${otp}`, // plain text body
  };
  transporter.sendMail(mailOptions, function (error, info) {
    const savetoDb = OTP.create({
      email,
      otp,
    });
    if (!savetoDb) {
      console.log(error);
      res.status(500).send("Failed to send OTP.");
    }
    console.log("Email has been sent succesfully");
    res.status(200).send(`OTP has been sent to ${email}`);
  });
});
export { sendMail };
