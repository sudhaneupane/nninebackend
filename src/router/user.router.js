import { addUser, checkUser } from "../controllers/user.controller.js";
import { Router } from "express";
import { sendMail } from "../services/sendMail.js";

const router = Router();
router.route("/login").post(checkUser);
router.route("/register").post(addUser);

//otp verification route

router.route("/send-otp").post(sendMail);

export default router;
