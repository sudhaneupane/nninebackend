import OTP from "../models/otp.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const verifyOtp = asyncHandler(async (req, res) => {
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

    if (!savedOtp || savedOtp.otp !== otp) {
      return res.status(400).json({ error: "Invalid email or OTP" });
    }

    await savedOtp.deleteOne();

    return res.status(200).json({ message: "Successful" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while verifying the code" });
  }
});

export { verifyOtp };
