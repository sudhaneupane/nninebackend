import otpGenerator from "otp-generator";

const generateOtp = () => {
  const Otp = otpGenerator.generate(6, {
    upperCaseAlphabets: false,
    specialChars: false,
    lowerCaseAlphabets:false,
    digits:true,
  });
  return Otp;
};

export { generateOtp };
