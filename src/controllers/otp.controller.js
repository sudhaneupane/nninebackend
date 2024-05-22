import OTP from "../models/otp.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendMail } from "../services/sendMail.js";
import { generateOtp } from "../services/generateOtp.js";

const verifyOtp = async (req, res) => {
  let { email, otp } = req.body;
  otp = Number(otp);
  if (!email) {
    return res.status(400).json("Email is required to send OTP");
  }
  if (!otp) {
    return res.status(400).json("OTP is required");
  }
  try {
    const savedOtp = await OTP.findOne({ email });
    const checkOtp = savedOtp.otp === otp;
    if (!checkOtp) {
      res.status(400).json("Invalid email or OTP");
    }
    const deleteOtp = await savedOtp.deleteOne({ otp });
    if (deleteOtp) {
      res.status(200).json("Ramro xa otp");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("An error occured while verifying the code");
  }
};

export { verifyOtp };
