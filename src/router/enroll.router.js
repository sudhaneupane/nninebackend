import { Router } from "express";
import { enrollUser } from "../controllers/enroll.controller.js";

const router=Router()

router.route('/register').post(enrollUser)

export default router