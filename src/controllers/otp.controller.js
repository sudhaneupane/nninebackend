import OTP from "../models/otp.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { sendMail } from "../services/sendMail.js";
import { generateOtp } from "../services/generateOtp.js";

const otpInfo = asyncHandler(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json("Email is required");
  }

  try {
    const otp = generateOtp();
    const otpDetail = await OTP.create({
      email,
      timestamp: new Date(),
      otp,
    });

    await sendMail({ email, otp });
    res.status(200).json("OTP and email saved");
  } catch (error) {
    console.error(error);
    res.status(500).json("An error occurred while sending the OTP");
  }
});

const verifyOtp = asyncHandler(async () => {});

export { otpInfo, verifyOtp };

