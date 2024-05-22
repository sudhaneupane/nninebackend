import { addUser, checkUser } from "../controllers/user.controller.js";
import { Router } from "express";
import { sendMail } from "../services/sendMail.js";
import { otpInfo } from "../controllers/otp.controller.js";

const router = Router();
router.route("/login").post(checkUser);
router.route("/register").post(addUser);

//otp verification route
router.route("/send-otp", otpInfo).post(sendMail);
// router.route("/verify").post(otpInfo)

export default router;
