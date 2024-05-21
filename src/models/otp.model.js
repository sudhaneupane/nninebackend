import mongoose, { Schema } from "mongoose";

const otpModel = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  otp: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
    required: true,
    get: (timestamp) => timestamp.getTime(),
    set: (timestamp) => new Date(timestamp),
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
});

const OTP = mongoose.model("OTP", otpModel);
export default OTP